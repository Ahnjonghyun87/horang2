"use client";

import LoadingPage from "@/app/loading";
import { ApiInformation } from "@/types/Main";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { MainListTitle } from "../common/MainListTitle";
import { NoResultsFound } from "../maindetail/NoResultsFound";
import { MainTravelSlider } from "./swiper/TravelSlider";

interface TravelProps {
  searchTerm: string;
}

const fetchTravel = async (): Promise<ApiInformation[]> => {
  const response = await fetch("/api/main/tourism/travel");
  if (!response.ok) {
    throw new Error("error");
  }
  return response.json();
};

export const Travel: React.FC<TravelProps> = ({ searchTerm }) => {
  const [displayCount, setDisplayCount] = useState<number>(20);
  const router = useRouter();
  const {
    data: travel,
    isPending,
    error,
  } = useQuery<ApiInformation[], Error>({
    queryKey: ["travel"],
    queryFn: fetchTravel,
  });

  const sortedAndFilteredTravel: ApiInformation[] = useMemo(() => {
    if (!travel) return [];

    const filtered: ApiInformation[] = travel.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const shuffled: ApiInformation[] = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled
      .sort((a, b) => {
        if (a.firstimage && !b.firstimage) return -1;
        if (!a.firstimage && b.firstimage) return 1;
        return 0;
      })
      .slice(0, displayCount);
  }, [travel, displayCount, searchTerm]);

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      <div className="mx-auto max-w-[327px] py-8 lg:max-w-[960px] flex flex-col lg:gap-10">
        <MainListTitle TitleName={`추천 여행지 `} onClick={() => router.push("/travel")} />
        <div className="mx-auto lg:max-w-[960px] lg:h-[243px] flex flex-col lg:gap-10 max-w-[327px]">
          {sortedAndFilteredTravel.length > 0 ? (
            <MainTravelSlider
              travel={sortedAndFilteredTravel}
              contentId={""}
              imageUrl={""}
              contentTypeId={""}
              title={""}
              addr1={""}
              tel={""}
              userId={""}
            />
          ) : (
            <NoResultsFound />
          )}
        </div>
      </div>
    </>
  );
};
