import { CaretRight } from 'phosphor-react';
import Button  from '../components/button'

interface CardProjectProps {
    ImgUrl?: string;
    title: string;
    text: string;
    textspan: string;
    graph: string;
    link: string;
    
}

export function CardProjectLeft(props: CardProjectProps){
    return(
        <div className="flex flex-row mt-20 w-[1220px]  gap-8">
     <img src={props.ImgUrl} alt="" className=" m-auto w-[594px] "/>
    
    <div className="flex flex-col mt-[183px] ">
        <strong className="font-sans font-semibold   text-[#E2E2E5]">{props.title}</strong>
        <p className="font-sans text-[32px] mt-4 font-light text-[#E2E2E6]">{props.text}<span className="font-semibold">{props.textspan}</span>  </p>
        
        <p className='mt-6 text-lg text-[#E3E4E6] font-sans font-light'>{props.graph}</p>

    <a href={props.link} target="_blank">
        <Button>View work 
        <CaretRight size={24} />
        </Button>
      </a>
 </div>
</div>
    )
}

export function CardProjectRight(props: CardProjectProps){
    return(
        <div className="flex flex-row  mt-20 w-[1220px]  gap-8">
    <div className="flex flex-col mt-[183px] ">
        <strong className="font-sans font-semibold   text-[#E2E2E5]">{props.title}</strong>
        <p className="font-sans text-[32px] mt-4 font-light text-[#E2E2E6]">{props.text}<span className="font-semibold">{props.textspan}</span>  </p>
        
        <p className='mt-6 text-lg text-[#E3E4E6] font-sans font-light'>{props.graph}</p>

    <a href={props.link} target="_blank">
        <Button>View work 
        <CaretRight size={24} />
        </Button>
      </a>
 </div>
 <img src={props.ImgUrl} alt="" className=" m-auto w-[594px] "/>
</div>
    )
}