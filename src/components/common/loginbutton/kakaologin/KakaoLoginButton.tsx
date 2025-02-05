"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/modal.context";

const supabase = createClient();

const KakaoLoginButton = () => {
  const router = useRouter();
  const { open } = useModal();

  const kakaoLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/login/auth/callback`,
      },
    });

    if (error) {
      open({ title: "로그인 오류", content: "OAuth 로그인 중 오류가 발생했습니다. 다시 시도해 주세요." });
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={kakaoLogin}
      className="flex items-center justify-center bg-[#FFD600] border border-grey-300 rounded-lg shadow-md hover:bg-yellow-400 cursor-pointer p-2"
    >
      <Image src="/assets/images/login_logo/kakao_logo.png" alt="Kakao Logo" width={24} height={24} />
      <span className="font-semibold text-grey-800 ml-2">카카오 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;
