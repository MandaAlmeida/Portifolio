import { CardAbout } from "../components/cardAbout";
import About1 from "../assets/images/About/About1.png";
import About2 from "../assets/images/About/About2.png";
import About3 from "../assets/images/About/About3.png";

export function About() {
  return (
    <div
      id="About"
      className="flex sm:flex-col-reverse lg:flex-row lg:gp-8 sm:gap-4 py-16 sm:items-center sm:px-4 lg:px-28"
    >
      <div className=" flex flex-col font-sans gap-4 lg:w-[50%] sm:w-full text-[#E3E4E6] ">
        <h2 className=" lg:text-2xl sm:text-xl  font-semibold uppercase">
          Um pouco sobre mim
        </h2>
        <strong className="  lg:text-[32px] sm:text-xl font-semibold lg:leading-[48px]">
          <span className=" font-light opacity-[55%]">
            Sou uma desenvolvedora Front-ent que é apaixonada{" "}
          </span>{" "}
          por aprender sobre novas tecnologias. Além da programação, adoro
          música, jogos e viagens.
        </strong>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex items-center">
          <CardAbout imgUrl={About1} />
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <CardAbout imgUrl={About2} />
          <CardAbout imgUrl={About3} />
        </div>
      </div>
    </div>
  );
}
