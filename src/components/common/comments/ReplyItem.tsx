import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko.json";
import { useModal } from "@/context/modal.context";

TimeAgo.addDefaultLocale(ko);
const timeAgo = new TimeAgo("ko-KR");

const supabase = createClient();

interface Reply {
  id: string;
  parent_comment_id: string;
  created_at: string;
  post_id: string;
  user_id: string;
  content: string;
  user_nickname?: string;
}

const ReplyItem: React.FC<{
  reply: Reply;
  userId: string | null;
  queryKey: string[];
}> = ({ reply, userId, queryKey }) => {
  const queryClient = useQueryClient();
  const modal = useModal();
  const [editingReplyId, setEditingReplyId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState("");

  const updateReplyMutation = useMutation({
    mutationFn: async ({ replyId, newContent }: { replyId: string; newContent: string }) => {
      const { data, error } = await supabase
        .from("Post_commentreplies")
        .update({ content: newContent })
        .eq("id", replyId)
        .select("*");

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setEditingReplyId(null);
      setEditingContent("");
      modal.open({
        title: "성공!",
        content: <div className="text-center">대댓글이 성공적으로 수정되었습니다.</div>,
      });
    },
    onError: (error) => {
      modal.open({
        title: "실패!",
        content: <div className="text-center">대댓글 수정에 실패했습니다. 오류: {error.message}</div>,
      });
    },
  });

  const deleteReplyMutation = useMutation({
    mutationFn: async (replyId: string) => {
      const { error } = await supabase.from("Post_commentreplies").delete().eq("id", replyId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      modal.open({
        title: "성공!",
        content: <div className="text-center">대댓글이 성공적으로 삭제되었습니다.</div>,
      });
    },
    onError: (error) => {
      modal.open({
        title: "실패!",
        content: <div className="text-center">대댓글 삭제에 실패했습니다. 오류: {error.message}</div>,
      });
    },
  });

  const handleEditReply = (replyId: string, content: string) => {
    setEditingReplyId(replyId);
    setEditingContent(content);
  };

  const handleSaveEdit = (replyId: string) => {
    if (editingContent.trim() === "") {
      modal.open({
        title: "경고!",
        content: <div className="text-center">대댓글 내용이 비어 있습니다.</div>,
      });
      return;
    }
    updateReplyMutation.mutate({ replyId, newContent: editingContent });
  };

  const handleDeleteReply = (replyId: string) => {
    modal.open({
      title: "삭제 확인",
      content: (
        <div className="text-center">
          <p>정말로 이 대댓글을 삭제하시겠습니까?</p>
          <button
            onClick={() => {
              deleteReplyMutation.mutate(replyId);
              modal.close();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            삭제
          </button>
        </div>
      ),
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>, replyId: string) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSaveEdit(replyId);
    }
  };

  return (
    <li
      className="border border-primary-100 sm:border-none p-4 rounded-lg mb-2 mx-4"
      style={{ padding: "10px 5px", position: "relative" }}
    >
      {editingReplyId === reply.id ? (
        <div>
          <textarea
            value={editingContent}
            onChange={(e) => setEditingContent(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, reply.id)}
            className="w-full p-2 border border-primary-100 rounded-lg mb-2 "
            rows={4}
          />
          <button
            onClick={() => handleSaveEdit(reply.id)}
            className="px-4 py-2 mr-2 border-primary-200 font-black bg-primary-100 rounded"
          >
            저장
          </button>
          <button
            onClick={() => setEditingReplyId(null)}
            className="px-4 py-2 bg-white text-primary-600 border border-orange-300 rounded font-black"
          >
            취소
          </button>
        </div>
      ) : (
        <div style={{ marginBottom: "20px", position: "relative" }}>
          <Image
            src="/assets/images/profile_ex.png"
            alt="유저 프로필 사진"
            width={25}
            height={25}
            className="rounded-full"
            style={{ position: "absolute", top: "0", left: "0" }}
          />
          <div style={{ marginLeft: "35px", paddingTop: "2px" }}>
            <p className="font-semibold" style={{ display: "inline-block", marginRight: "10px" }}>
              {reply.user_nickname}
            </p>
            <p className="text-sm text-grey-500" style={{ marginTop: "5px" }}>
              {timeAgo.format(new Date(reply.created_at))}
            </p>
            {reply.user_id === userId && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "10px",
                  display: "inline-block",
                }}
              >
                <span
                  onClick={() => handleEditReply(reply.id, reply.content)}
                  className="cursor-pointer"
                  style={{ fontSize: "12px", color: "black", marginRight: "5px" }}
                >
                  수정
                </span>
                <span
                  onClick={() => handleDeleteReply(reply.id)}
                  className="cursor-pointer"
                  style={{ fontSize: "12px", color: "black" }}
                >
                  삭제
                </span>
              </div>
            )}
          </div>
          <p className="mt-2 text-grey-800 text-sm" style={{ marginLeft: "35px" }}>
            {reply.content}
          </p>
        </div>
      )}
    </li>
  );
};

export default ReplyItem;
