
import { Github, Linkedin, Whatsapp, Gmail  } from '@icons-pack/react-simple-icons'

export function Contact(){
    return (
        <div className='flex font-sans text-neutra flex-col items-center text-center gap-16'>
            <div className='  font-light'>
                <h3 className='font-semibold text-[56px] leading-[84px] ' ><span className=' font-light opacity-[55%] '>Get </span>in Touch. </h3>
                <strong className=' text-lg leading-[150%] '>So that we can talk more about...</strong>
            </div>
            <div className='flex flex-row gap-14 opacity-[55%] '>
            <a href="mailto:almeidafonseca14@gmail.com"  target="_blank" aria-label="Gmail" rel="noopener noreferrer" ><Gmail color='#E3E4E6' size={48} className='p-2' /></a>
                <a href="https://www.linkedin.com/in/amanda-almeida-bab4541ab/"  target="_blank" aria-label="Linkedin" rel="noopener noreferrer"><Linkedin color='#E3E4E6' size={48} className='p-2'/></a>
                <a href="https://github.com/amandaalmeida20"  target="_blank" aria-label="Github" rel="noopener noreferrer"><Github  color='#E3E4E6' size={48} className='p-2'/></a>
                <a href="https://api.whatsapp.com/send?phone=5531999632923"  target="_blank" aria-label="Whatsapp" rel="noopener noreferrer"><Whatsapp color='#E3E4E6' size={48} className='p-2'/></a>
            </div>
            <div className='mb-10'>
                <p className=' font-semibold '><span className='font-light opacity-[55%]'>Made by</span> Amanda Almeida</p>
            </div>
        </div>
    )
}