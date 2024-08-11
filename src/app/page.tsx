"use client";
import { Travel } from "@/components/main/Travel";
import Control from "@/components/main/Control";
import { MainImage } from "@/components/main/image/MainImage";
import { Leports } from "@/components/main/Leports";
import { useState } from "react";
import { Festival } from "@/components/main/Festival";
import Header from "@/components/common/Header";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MainImage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Control />
      </div>
      <Travel searchTerm={searchTerm} />
      <Leports searchTerm={searchTerm} />
      <Festival searchTerm={searchTerm} />
    </main>
  );
};

export default Home;
