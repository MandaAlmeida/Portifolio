interface cardAboutProps {
    imgUrl: string;
}

export function CardAbout(props: cardAboutProps){
    return(
        <div className=" w-[282px] h-[408px] rounded-lg ">
            <img src={props.imgUrl} alt="" />
        </div>
    )
}