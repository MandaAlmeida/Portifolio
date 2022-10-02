interface CardProps {
    ImgUrl: string;
    title: string;
    text: string;
}

export function Card(props: CardProps){
    return (
 <div className="bg-[#151620] relative m-auto w-[380px] h-[395px] rounded-[20px]">
     <img src={props.ImgUrl} alt="" className="m-auto mt-[53px] w-[88px]"/>
    <div className="flex flex-col">
        <strong className="font-heebo font-normal mt-9 text-xl text-center  text-[#E2E2E5]">{props.title}</strong>
        <span className="font-heebo text-xl mt-[56px] px-9 text-center font-light text-[#8A8A8F]">{props.text}</span>
    </div>
</div>
    )
}