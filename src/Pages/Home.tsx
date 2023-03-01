import { CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";
import "../styles/input.css";
import { Header } from "./Header";

export function Home() {
  const [activeCor, setactiveCor] = useState(false);

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY > 10) {
        setactiveCor(true);
      } else {
        setactiveCor(false);
      }
    }

    window.addEventListener("scroll", positionScroll);
  }, []);
  return (
    <div className="lg:px-28 sm:px-4 flex flex-col justify-between bg-fundo bg-cover h-[100vh]">
      <Header action={activeCor} />
      <div></div>
      <h1 className="text-white mx-auto lg:text-9xl sm:text-[80px] font-xing text-center ">
        Amanda Almeida
      </h1>
      <CaretDown size={32} className="text-white mx-auto mb-10" />
    </div>
  );
}
