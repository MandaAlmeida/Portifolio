interface cardSkillsProps {
    ImgUrl?: string;
    ImgUrlhtml?: string;
    ImgUrlCss?: string;
    title: string;
    text: string;
}

export function Card(props: cardSkillsProps){
    return (
        
 <div className="bg-[#151620]  m-auto w-[380px] h-[395px] rounded-[20px]">
    
    <div className="flex flex-row gap-2 justify-center">
     <img src={props.ImgUrlhtml} alt="" className=" mt-[53px] "/>
     <img src={props.ImgUrlCss} alt="" className="  mt-[53px]"/>
     </div>
     <img src={props.ImgUrl} alt="" className=" m-auto w-[88px]"/>
    <div className="flex flex-col">
        <strong className="font-heebo font-normal mt-9 text-xl text-center  text-[#E2E2E5]">{props.title}</strong>
        <span className="font-heebo text-xl mt-[10%] px-9 text-center font-light text-[#8A8A8F]">{props.text}</span>
    </div>
    </div>

    )
}