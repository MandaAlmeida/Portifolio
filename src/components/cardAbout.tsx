interface cardAboutProps {
  imgUrl: string;
}

export function CardAbout(props: cardAboutProps) {
  return <img className=" w-[100%] rounded-lg " src={props.imgUrl} alt="" />;
}
