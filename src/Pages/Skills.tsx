import { Card } from "../components/cardSkills";
import JavaScript from "../assets/JavaScript.svg";
import Html from "../assets/html.svg";
import CSS from "../assets/css.svg";
import ReactNative from "../assets/reactNative.svg";
import React from "../assets/react.svg";
import Vtex from "../assets/vtex.svg";
import Node from "../assets/node.svg";

export function Skills(){
    return(
        <div className="pt-40 ">
        <div >
            <h2 className="bg-primary uppercase bg-clip-text text-transparent font-heebo text-xl font-light" >COMO EU <span className="font-medium">POSSO TE AJUDAR?</span></h2>
            <strong className="text-[#E2E2E5] font-heebo font-medium text-[32px]">Algumas de minhas habilidades</strong>
            <p className="font-heebo text-center font-light text-[26px] text-[#E2E2E5] py-8">Programação</p>
        </div>
        <div className="flex flex-row  flex-wrap gap-5">
        
        <Card 
         ImgUrlhtml={Html}
         ImgUrlCss={CSS}
         title= 'HTML/CSS'
         text= 'Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa.'   
        />
        <Card 
         ImgUrl= {JavaScript}
         title= 'JavaScript'
         text= 'Criação de funções mais avançadas em sites WEB com JavaScript Vanilla'   
        />
        <Card 
         ImgUrl= {ReactNative}
         title= 'REACT NATIVE'
         text= 'Desenvolvimento de aplicações mobiles utilizando JavaScript por meio deste framework.'   
        />
        <Card 
         ImgUrl= {React}
         title= 'REACT.JS'
         text= 'Desenvolvimento de aplicações para desktop '   
        />
        <Card 
         ImgUrl= {Vtex}
         title= 'VTEX'
         text= 'Desenvolvimento de aplicações para desktop com responsividade'   
        />
        <Card 
         ImgUrl= {Node}
         title= 'NODE.JS'
         text= 'Desenvolvimento de aplicações para desktop com responsividade'   
        />
        </div>
        </div>
    )
}