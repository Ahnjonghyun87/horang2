import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useUserStore } from "@/zustand/userStore";

const Nav = () => {
  const router = useRouter();
  const { id: userId } = useUserStore((state) => ({
    id: state.id,
  }));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (href: string) => (event: React.MouseEvent) => {
    if (href === "/community") {
      router.push(href);
    } else if (!userId) {
      event.preventDefault();
      router.push("/signin");
    } else {
      router.push(href);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="ml-auto flex items-center space-x-4 relative">
      <div ref={dropdownRef} className="relative">
        <span className="text-primary hover:text-gray-400 cursor-pointer" onClick={handleDropdownToggle}>
          여행지 추천
        </span>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 min-w-max bg-white border border-gray-200 shadow-lg rounded-md z-50">
            <Link href="/travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              추천 여행지
            </Link>
            <Link href="/hotel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              숙소
            </Link>
            <Link href="/leports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              레포츠
            </Link>
            <Link href="/restaurant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              음식점
            </Link>
            <Link href="/festival" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              축제 및 행사
            </Link>
          </div>
        )}
      </div>
      <Link href="/location">
        <span className="text-primary hover:text-gray-400 cursor-pointer" onClick={handleNavigation("/location")}>
          내 근처 여행지
        </span>
      </Link>
      <Link href="/travelMbti">
        <span className="text-primary hover:text-gray-400 cursor-pointer" onClick={handleNavigation("/travelMbti")}>
          나만의 여행
        </span>
      </Link>
      <Link href="/mypage">
        <span className="text-primary hover:text-gray-400 cursor-pointer" onClick={handleNavigation("/mypage")}>
          나의 공간
        </span>
      </Link>
      <Link href="/community">
        <span className="text-primary hover:text-gray-400 cursor-pointer" onClick={handleNavigation("/community")}>
          호랑이 모임
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
