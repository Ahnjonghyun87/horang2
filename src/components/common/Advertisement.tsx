import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/images/banner.jpg";
import banner2 from "../../../public/assets/images/banner2.png";

const Advertisement: React.FC = () => {
  return (
    <section className="sm:my-[10px] md:my-[20px] lg:my-[30px]">
      <Image className="sm:block md:hidden lg:hidden" src={banner2} alt={"banner2"} width={375} height={140} />
      <Image className="sm:hidden md:block lg:block" src={banner} alt={"banner"} width={1280} height={360} />
    </section>
  );
};

export default Advertisement;
