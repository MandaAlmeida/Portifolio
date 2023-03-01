interface cardSkillsProps {
  ImgUrl1?: string;
  ImgUrl2?: string;
  title: string;
  text: string;
}

export function Card(props: cardSkillsProps) {
  return (
    <div className="bg-[#151620] sm:w-full sm:max-w-[350px] sm:h-[343px] lg:w-[350px] lg:h-[395px] rounded-[20px]">
      <div className=" m-auto flex flex-col gap-6">
        <div className="flex flex-row gap-2 justify-center">
          <img src={props.ImgUrl1} alt="" className=" mt-[53px] " />
          <img src={props.ImgUrl2} alt="" className="  mt-[53px]" />
        </div>
        <div className="flex flex-col">
          <strong className="font-heebo font-normal text-xl text-center  text-[#E2E2E5]">
            {props.title}
          </strong>
          <span className="font-heebo sm:text-base lg:text-xl py-4 px-9 text-center font-light text-[#8A8A8F]">
            {props.text}
          </span>
        </div>
      </div>
    </div>
  );
}
