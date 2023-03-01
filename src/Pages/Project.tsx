import { CardProject } from "../components/cardProject";
import image from "../assets/images/Project/image1.png";

export function Project() {
  return (
    <div
      id="Project"
      className=" flex flex-col justify-center py-16 lg:px-28 sm:px-4 "
    >
      <h2 className=" text-6xl font-sans  font-semibold text-[#E3E4E6]">
        {" "}
        Projetos
      </h2>
      <div className=" lg:mt-20 sm:mt-8 justify-center flex flex-col sm:items-center lg:items-stretch">
        <CardProject
          ImgUrl={image}
          title="Real estate Template"
          text="Lorem ipsum dolor sit amet, consectetur "
          textSpan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
          graph="Website Design"
          link="https://github.com/amandaalmeida20"
        />
        <CardProject
          ImgUrl={image}
          title="Real estate Template"
          text="Lorem ipsum dolor sit amet, consectetur "
          textSpan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
          graph="Website Design"
          link="https://github.com/amandaalmeida20"
          className="flex-row-reverse mt-20"
        />
        <CardProject
          ImgUrl={image}
          title="Real estate Template"
          text="Lorem ipsum dolor sit amet, consectetur "
          textSpan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
          graph="Website Design"
          link="https://github.com/amandaalmeida20"
          className="mt-20"
        />
        <CardProject
          ImgUrl={image}
          title="Real estate Template"
          text="Lorem ipsum dolor sit amet, consectetur "
          textSpan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
          graph="Website Design"
          link="https://github.com/amandaalmeida20"
          className="flex-row-reverse mt-20"
        />
      </div>
    </div>
  );
}
