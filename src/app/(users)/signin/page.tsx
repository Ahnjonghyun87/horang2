"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import EmailInput from "@/components/common/userspage/signinpage/EmailInput";
import PasswordInput from "@/components/common/userspage/signinpage/PasswordInput";
import LoginButton from "@/components/common/userspage/signinpage/LoginButton";
import SocialLoginButtons from "@/components/common/userspage/SocialLoginButtons";
import SignInLink from "@/components/common/userspage/signinpage/SignInLink";
import { useUserStore } from "@/zustand/userStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { id, user_email, user_nickname, profile_url } = data;
        setUser(id, user_email, user_nickname, profile_url);
        router.push("/");
      } else {
        setError(`로그인 오류: ${data.error}`);
      }
    } catch (error) {
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center bg-[url('/assets/images/backgrounds/backgrounds.png')] sm:bg-[url('/assets/images/backgrounds/m_signup.png')]">
      <div className="bg-white p-8 rounded-[40px] border border-gray-300 w-full max-w-[500px] sm:max-w-[327px] h-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <div className="space-y-4 w-full max-w-[401px] mx-auto sm:max-w-[280px]">
          <EmailInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <LoginButton onClick={handleLogin} />
          <div className="flex items-center justify-between mt-4 w-full max-w-[280px] mx-auto">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500 mx-4">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <SocialLoginButtons />
          <SignInLink />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
