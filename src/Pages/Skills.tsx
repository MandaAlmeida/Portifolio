import { Card } from "../components/card";
import JavaScript from "../assets/JavaScript.svg"

export function Skills(){
    return(
        <div className="relative pt-20 px-28 ">
        <div >
            <h2 className="bg-primary uppercase bg-clip-text text-transparent font-heebo text-xl font-light" >COMO EU <span className="font-medium">POSSO TE AJUDAR?</span></h2>
            <strong className="text-[#E2E2E5] font-heebo font-medium text-[32px]">Algumas de minhas habilidades</strong>
            <p className="font-heebo text-center font-light text-[26px] text-[#E2E2E5] py-8">Programação</p>
        </div>
        <div className="flex flex-row  flex-wrap gap-5">
        
        <Card 
         ImgUrl= {JavaScript}
         title= 'JavaScript'
         text= 'Criação de funções mais avançadas em sites WEB com JavaScript Vanilla'   
        />
        <Card 
         ImgUrl= {JavaScript}
         title= 'JavaScript'
         text= 'Criação de funções mais avançadas em sites WEB com JavaScript Vanilla'   
        />
        <Card 
         ImgUrl= {JavaScript}
         title= 'JavaScript'
         text= 'Criação de funções mais avançadas em sites WEB com JavaScript Vanilla'   
        />
        <Card 
         ImgUrl= {JavaScript}
         title= 'JavaScript'
         text= 'Criação de funções mais avançadas em sites WEB com JavaScript Vanilla'   
        />
        </div>
        </div>
    )
}