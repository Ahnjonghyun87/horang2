import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { ApiInformation } from "@/types/Main";
import { MainTravelCard } from "./MainTravelCard";

interface MainTravelSliderProps {
  travel: ApiInformation[];
}

export const MainTravelSlider: React.FC<MainTravelSliderProps> = ({ travel }) => {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      spaceBetween={40}
      slidesPerView={4}
      slidesPerGroup={4}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className=" lg:w-full lg:h-[346px]"
    >
      {travel.map((item) => (
        <SwiperSlide key={item.contentid} className=" lg:w-[330px] lg:h-[346px]">
          <MainTravelCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
