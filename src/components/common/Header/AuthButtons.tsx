import { useEffect, useState } from "react";
import { useUserStore } from "@/zustand/userStore";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const supabase = createClient();

interface AuthButtonsProps {
  userId: string | null;
  handleLogout: () => Promise<void>;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ userId, handleLogout }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { setUser, clearUser } = useUserStore((state) => ({
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));

  useEffect(() => {
    const checkSessionAndFetchUser = async () => {
      const { data: sessionData } = await supabase.auth.getSession();

      if (sessionData?.session?.user) {
        const { id } = sessionData.session.user;

        const { data: userData, error } = await supabase.from("Users").select("*").eq("id", id).single();

        if (error || !userData) {
          console.error("사용자 정보를 가져오는데 실패했습니다:", error);
          return;
        }

        const { user_email = "", user_nickname = "", profile_url = "", provider = "", provider_id = "" } = userData;

        setUser(id, user_email || "", user_nickname || "", profile_url || "", provider || "", provider_id || "");
      } else {
        clearUser();
      }
    };

    setIsClient(true);
    checkSessionAndFetchUser();
  }, [setUser, clearUser]);

  const onLogoutClick = async () => {
    if (!userId) return;

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        Cookies.remove("accessToken", { path: "/" });

        clearUser();

        router.push("/");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex-shrink-0 flex space-x-4 ml-4">
      {!userId ? (
        <>
          <Link href="/signin">
            <span className="bg-[#222222] text-[#FF912B] border border-[#FF912B] px-4 py-2 rounded hover:bg-[#333333] cursor-pointer">
              로그인
            </span>
          </Link>
          <Link href="/signup">
            <span className="bg-[#FF912B] text-[#222222] border border-[#FF912B] px-4 py-2 rounded hover:bg-[#FFAB80] cursor-pointer">
              회원가입
            </span>
          </Link>
        </>
      ) : (
        <span
          onClick={onLogoutClick}
          className="bg-[#222222] text-[#FF912B] border border-[#FF912B] px-4 py-2 rounded hover:bg-[#333333] cursor-pointer"
        >
          로그아웃
        </span>
      )}
    </div>
  );
};

export default AuthButtons;
