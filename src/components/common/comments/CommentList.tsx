import { useState, useEffect, useRef } from "react";
import CommentItem from "./CommentItem";

interface Comment {
  post_comment_id: string;
  created_at: string;
  post_id: string;
  user_id: string;
  comments: string;
  user_nickname?: string;
}

const COMMENTS_PER_PAGE = 5;

const CommentList: React.FC<{
  comments: Comment[];
  userId: string | null;
  queryKey: string[];
}> = ({ comments, userId, queryKey }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);
  const hasScrolled = useRef(false);

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * COMMENTS_PER_PAGE;
  const currentComments = comments.slice(startIndex, startIndex + COMMENTS_PER_PAGE);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    if (hasScrolled.current) {
      scrollToBottom();
    } else {
      hasScrolled.current = true;
    }
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      handlePageChange(nextPage);
    }
  };

  const handlePreviousPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      handlePageChange(prevPage);
    }
  };

  return (
    <div className="comment-list-container ">
      <div className="mb-4 mt-4 rounded-lg">
        {currentComments.length > 0 ? (
          <ul className="space-y-4">
            {currentComments.map((comment) => (
              <CommentItem key={comment.post_comment_id} comment={comment} userId={userId} queryKey={queryKey} />
            ))}
          </ul>
        ) : (
          <p className="text-grey-600 font-normal">댓글이 없습니다.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4">
          <div className="w-[100px] flex justify-center">
            <button
              onClick={handlePreviousPage}
              className="px-4 py-2 bg-grey-200 rounded-lg"
              style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
            >
              이전
            </button>
          </div>
          <span className="text-lg">
            {currentPage} / {totalPages}
          </span>
          <div className="w-[100px] flex justify-center">
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-grey-200 rounded-lg"
              style={{ visibility: currentPage === totalPages ? "hidden" : "visible" }}
            >
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;
