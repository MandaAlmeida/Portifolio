import {
  Github,
  Linkedin,
  Whatsapp,
  Gmail,
} from "@icons-pack/react-simple-icons";

export function Contact() {
  return (
    <div className="flex font-sans text-neutra flex-col items-center text-center lg:gap-16 sm:gap-9">
      <div className="  font-light">
        <h3 className="font-semibold lg:text-[56px] sm:text-3xl lg:leading-[84px] ">
          <span className=" font-light opacity-[55%] ">Entre </span>em Contato.{" "}
        </h3>
        <strong className="lg:text-lg sm:text-sm lg:leading-[150%] ">
          Para que possamos falar mais sobre...
        </strong>
      </div>
      <div className="flex flex-row lg:gap-14 sm:gap-4 opacity-[55%] ">
        <a
          href="mailto:almeidafonseca14@gmail.com"
          target="_blank"
          aria-label="Gmail"
          rel="noopener noreferrer"
        >
          <Gmail color="#E3E4E6" size={48} className="p-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/amanda-almeida-bab4541ab/"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
        >
          <Linkedin color="#E3E4E6" size={48} className="p-2" />
        </a>
        <a
          href="https://github.com/MandaAlmeida/Portifolio"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
        >
          <Github color="#E3E4E6" size={48} className="p-2" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5531999632923"
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
        >
          <Whatsapp color="#E3E4E6" size={48} className="p-2" />
        </a>
      </div>
      <div className="mb-10">
        <p className=" font-semibold ">
          <span className="font-light opacity-[55%]">Made by</span> Amanda
          Almeida
        </p>
      </div>
    </div>
  );
}
