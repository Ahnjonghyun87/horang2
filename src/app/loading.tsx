import Image from "next/image";
import loading from "../../public/assets/images/loading.png";
import bottomDeco from "../../public/assets/images/bottom_deco.png";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center gap-2 text-3xl font-semibold bg-secondary-500 z-50">
      <div className="flex gap-5">
        <Image
          width={240}
          height={240}
          className="object-cover animate-spin"
          sizes="100%"
          src={loading}
          alt="로딩_중"
        />
      </div>
      <p className="animate mt-5 text-white">잠시만 기다려주세요...</p>
      <div className="absolute bottom-0 w-full">
        <Image className="w-full" sizes="100%" src={bottomDeco} alt="바닥_꾸밈" />
      </div>
    </div>
  );
};

export default LoadingPage;
