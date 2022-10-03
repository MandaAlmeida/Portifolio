import  {CardProjectLeft, CardProjectRight} from "../components/cardProject"
import image from "../assets/image1.svg"


export function Project(){
  


    return(
    <div  className="mt-20 ">
            <h2 className=" text-6xl font-sans font-light text-[#E3E4E6]">Selected <span className=" font-semibold">Project</span> </h2>
            <div className=" mt-24">
            <CardProjectLeft
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://www.youtube.com/watch?v=CncWzbrrhow"
            />
            <CardProjectRight
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://www.youtube.com/watch?v=CncWzbrrhow"
            />
            <CardProjectLeft
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://www.youtube.com/watch?v=CncWzbrrhow"
            />
            <CardProjectRight
            ImgUrl={image}
            title="Real estate Template"
            text="Lorem ipsum dolor sit amet, consectetur "
            textspan="adipiscing elit. Ultrices lorem non feugiat egestas amet."
            graph="Website Design"
            link="https://www.youtube.com/watch?v=CncWzbrrhow"
            />
            
            </div>
        </div>
    )
}