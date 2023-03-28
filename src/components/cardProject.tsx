import clsx from "clsx";
import { CaretRight } from "phosphor-react";
import Button from "../components/button";

interface CardProjectProps {
  ImgUrl?: string;
  title: string;
  text: string;
  textSpan: string;
  link: string;
  linkGit: string;
  className?: string;
}

export function CardProject(props: CardProjectProps) {
  const { ImgUrl, title, text, textSpan, link, linkGit, className } = props;
  return (
    <section
      className={clsx(
        "flex lg:flex-row sm:flex-col sm:gap-6 lg:gap-8",
        className
      )}
    >
      <div className="lg:w-[50%] lg:h-[490px] sm:w-full rounded-2xl">
        <a
          href={link}
          target="_blank"
          className="lg:w-full lg:h-full sm:flex sm:justify-center lg:justify-start cursor-pointer"
        >
          <img
            src={ImgUrl}
            alt=""
            className="lg:w-full lg:h-full object-cover sm:w-full rounded-2xl cursor-pointer transition ease-in-out delay-150 hover:scale-105 duration-300"
          />
        </a>
      </div>
      <div className=" lg:w-[50%] flex flex-col lg:justify-center gap-6">
        <strong className="font-sans font-semibold   text-[#E2E2E5]">
          {title}
        </strong>
        <p className="font-sans lg:text-[24px] lg:leading-[38px] sm:text-lg font-semibold text-[#E2E2E6]">
          <span className="font-light opacity-[55%]">{text}</span>
          {textSpan}
        </p>
        <a
          href={linkGit}
          target="_blank"
          className="sm:flex sm:justify-center lg:justify-start"
        >
          <Button>
            Projeto Git-Hub
            <CaretRight size={24} />
          </Button>
        </a>
      </div>
    </section>
  );
}
