"use client";

import { useModal } from "@/context/modal.context";
import Image from "next/image";
import { useParams } from "next/navigation";

const LinkUrlButton = () => {
  const params = useParams() as { contentId: string };
  const modal = useModal();

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert(`${process.env.NEXT_PUBLIC_BASE_URL}/detail/${params.contentId} : 클립보드에 복사되었습니다.`);
  };

  const handleCopyClick = () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/detail/${params.contentId}`;
    copyToClipboard(textToCopy);
  };
  return (
    <>
      <div onClick={handleCopyClick}>
        <div className="lg:px-4 lg:py-2 bg-slate-200 text-grey-950 lg:rounded bg-white md:px-2 md:py-1">
          <Image
            src="/assets/images/linkUrl.png"
            alt="이미지가 없습니다"
            width={32}
            height={32}
            className="md:w-12 md:h-12"
          />
        </div>
      </div>
    </>
  );
};

export default LinkUrlButton;
