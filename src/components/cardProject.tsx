import clsx from "clsx";
import { CaretRight } from "phosphor-react";
import Button from "../components/button";

interface CardProjectProps {
  ImgUrl?: string;
  title: string;
  text: string;
  textSpan: string;
  graph: string;
  link: string;
  className?: string;
}

export function CardProject(props: CardProjectProps) {
  return (
    <div
      className={clsx(
        "flex lg:flex-row sm:flex-col sm:gap-0 lg:gap-8",
        props.className
      )}
    >
      <img src={props.ImgUrl} alt="" className="lg:w-[50%] sm:w-full" />

      <div className="flex flex-col mt-[110px] lg:justify-center sm:mt-8">
        <strong className="font-sans font-semibold   text-[#E2E2E5]">
          {props.title}
        </strong>
        <p className="font-sans lg:text-[32px] lg:leading-[48px] sm:text-lg mt-4  font-semibold text-[#E2E2E6]">
          <span className="font-light opacity-[55%]">{props.text}</span>{" "}
          {props.textSpan}{" "}
        </p>

        <p className="mt-6 text-lg text-[#E3E4E6] font-sans font-light">
          {props.graph}
        </p>

        <a
          href={props.link}
          target="_blank"
          className="sm:flex sm:justify-center lg:justify-start"
        >
          <Button>
            Visualizar projeto
            <CaretRight size={24} />
          </Button>
        </a>
      </div>
    </div>
  );
}
