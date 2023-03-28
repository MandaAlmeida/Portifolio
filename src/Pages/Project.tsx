import { CardProject } from "../components/cardProject";
import image from "../assets/images/Project/image1.png";
import PontosTurísticos from "../assets/images/Project/PontosTuristicos.png";
import Git from "../assets/images/Project/Git.png";
import Agenda from "../assets/images/Project/Agenda.png";
import Spotify from "../assets/images/Project/Spotify.png";

export function Project() {
  return (
    <div
      id="Project"
      className=" flex flex-col justify-center py-16 lg:px-28 sm:px-4 "
    >
      <h2 className=" lg:text-6xl sm:text-4xl font-sans  font-semibold text-[#E3E4E6]">
        Projetos
      </h2>
      <h4 className=" lg:py-20 sm:py-8 lg:text-4xl sm:text-2xl font-sans font-semibold text-[#E3E4E6]">
        Concluídos
      </h4>
      <div className="justify-center flex flex-col sm:items-center lg:items-stretch">
        <CardProject
          ImgUrl={PontosTurísticos}
          title="Pontos Turísticos"
          text="Esse Projeto é um carrossel de Pontos Turísticos, foi"
          textSpan=" desenvolvido com Html, Sass e JavaScript, utilizando também a biblioteca Gulp e Slick"
          linkGit="https://github.com/amandaalmeida20/Ponto-turistico"
          link="https://ponto-turistico-versel.vercel.app/"
        />
        <CardProject
          ImgUrl={Git}
          title="Pesquisa Repositório"
          text="Nesse projeto você consegue pesquisar o GitHub de qualquer usuário e a api pesquisa e retorna os repositórios"
          textSpan=" Tecnologias usadas Api GitHub e React"
          linkGit="https://github.com/amandaalmeida20/Gama_git"
          link="https://gama-git-five.vercel.app/"
          className="lg:flex-row-reverse lg:mt-20 sm:mt-10"
        />
      </div>
      <h4 className=" lg:text-4xl sm:text-2xl lg:py-20  sm:py-8 font-sans  font-semibold text-[#E3E4E6]">
        Em andamento
      </h4>
      <div className="justify-center flex flex-col sm:items-center lg:items-stretch">
        <CardProject
          ImgUrl={Agenda}
          title="Agenda"
          text="Esse Projeto é uma agenda com lembrete e anotações, esta sendo "
          textSpan="desenvolvido com Html, Sass e JavaScript, utilizando também a biblioteca Gulp"
          linkGit="https://github.com/amandaalmeida20/Agenda"
          link="https://agenda-amandaalmeida.vercel.app/"
        />
        <CardProject
          ImgUrl={Spotify}
          title="Clone Spotify"
          text="Esse projeto é um clone do site do Spotify, Esta sendo "
          textSpan="desenvolvido com ReactJs e typeScript"
          linkGit="https://github.com/amandaalmeida20/clone-spotify"
          link="https://clone-spotify-pi.vercel.app/"
          className="lg:flex-row-reverse lg:mt-20 sm:mt-10"
        />
      </div>
    </div>
  );
}
