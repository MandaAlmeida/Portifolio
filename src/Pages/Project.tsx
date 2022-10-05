import  {CardProjectLeft, CardProjectRight} from "../components/cardProject"
import image from "../assets/Project/image1.png"


export function Project(){
  


    return(
    <div  className="mt-20 ">
            <h2 className=" text-6xl font-sans  font-semibold text-[#E3E4E6]"> <span className="font-light opacity-[55%]">Selected</span> Project</h2>
            <div className=" mt-24">
            <CardProjectLeft
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://github.com/amandaalmeida20"
            />
            <CardProjectRight
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://github.com/amandaalmeida20"
            />
            <CardProjectLeft
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://github.com/amandaalmeida20"
            />
            <CardProjectRight
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://github.com/amandaalmeida20"
            />
            
            </div>
        </div>
    )
}