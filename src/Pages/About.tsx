import { CardAbout } from '../components/cardAbout'
import About1 from '../assets/About/About1.png'
import About2 from '../assets/About/About2.png'
import About3 from '../assets/About/About3.png'

export function About(){
    return(
        <div className='flex flex-1 mt-[120px] py-[74px]'>
        <div className=' flex flex-col font-sans gap-4 mr-[34px]  text-[#E3E4E6]  mt-[278px]'>
            <h2 className=' text-2xl  font-semibold uppercase'>A bit about me</h2>
            <strong className='  text-[32px] font-semibold leading-[48px]'><span className=' font-light opacity-[55%]'>I am a UI/UX designer who is passionate about creating</span> beautiful and joyful digital experiences. Besides design, I love music, games and travelling.</strong>
            </div>
        <div  className='flex flex-row gap-8'>
        <div className=' mt-[220px]'>
        <CardAbout
        imgUrl={About1} />
        </div>
        <div>
        <CardAbout
        imgUrl={About2} />
        <CardAbout
        imgUrl={About3} />
        </div>
        </div>
        </div>
    )   
}