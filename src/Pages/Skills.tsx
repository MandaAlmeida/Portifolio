import { Card } from "../components/cardSkills";
import JavaScript from "../assets/images/Skills/JavaScript.svg";
import Html from "../assets/images/Skills/html.svg";
import CSS from "../assets/images/Skills/css.svg";
import ReactNative from "../assets/images/Skills/reactNative.svg";
import React from "../assets/images/Skills/react.svg";
import Vtex from "../assets/images/Skills/vtex.svg";
import Node from "../assets/images/Skills/node.svg";
import Sass from "../assets/images/Skills/sass.svg";
import Git from "../assets/images/Skills/git.svg";
import Tailwind from "../assets/images/Skills/tailwind.svg";

export function Skills() {
  return (
    <div className="sm:px-4  lg:px-28 py-16">
      <>
        <h2 className="bg-primary uppercase bg-clip-text text-transparent font-heebo sm:text-base lg:text-xl font-light">
          COMO EU <span className="font-medium">POSSO TE AJUDAR?</span>
        </h2>
        <strong className="text-[#E2E2E5] font-heebo font-medium lg:text-[32px] sm:text-2xl">
          Algumas de minhas habilidades
        </strong>
        <p className="font-heebo text-center font-light text-[26px] text-[#E2E2E5] lg:py-8 sm:py-6">
          Programação
        </p>
      </>
      <div className="flex justify-center flex-wrap gap-5">
        <Card
          ImgUrl1={Html}
          ImgUrl2={CSS}
          title="HTML/CSS"
          text="Desenvolvimento de sites completos e fieis aos mais variados designs propostos pelo cliente ou empresa."
        />
        <Card
          ImgUrl1={JavaScript}
          title="JavaScript"
          text="Criação de funções mais avançadas em sites WEB com JavaScript Vanilla"
        />
        <Card
          ImgUrl1={React}
          title="REACT.JS"
          text="Desenvolvimento de aplicações para desktop "
        />
        <Card
          ImgUrl1={Vtex}
          title="VTEX"
          text="Desenvolvimento de aplicações para desktop com responsividade"
        />
        <Card
          ImgUrl1={Node}
          title="NODE.JS"
          text="Desenvolvimento de aplicações para desktop com responsividade"
        />
        <Card
          ImgUrl1={Git}
          title="GIT"
          text="Desenvolvimento de aplicações para desktop com responsividade"
        />
        <Card
          ImgUrl1={Tailwind}
          title="TAILWIND"
          text="Desenvolvimento de aplicações para desktop com responsividade"
        />
        <Card
          ImgUrl1={Sass}
          title="SASS"
          text="Desenvolvimento de aplicações para desktop com responsividade"
        />
      </div>
    </div>
  );
}
