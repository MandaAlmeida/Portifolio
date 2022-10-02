import eu from '../assets/eu.svg'
import logo from '../assets/logo.svg'
import {CaretDown} from 'phosphor-react'
import '../input.css'

export function Home() {
    return (
      
    <div className=' bg-fundo h-[750px]' >
    <header className="flex mx-28" >
     <div className='mt-2 flex-1'>
       <a href=""><img src={logo} alt="" /></a>
     </div>
     <div className='flex justify-end text-sm gap-8 text-white mt-8  hover:bg-primary hover:bg-clip-text font-sans font-semibold uppercase'>
         <a href="" className=" hover:text-transparent ">Home</a>
         <a href="" className=" hover:text-transparent ">Project</a>
         <a href="" className="hover:text-transparent ">About</a>
       </div>
    </header>
    
        
      <div className='flex  mt-56'>
         <h1 className='text-white mx-auto text-9xl font-xing'>Amanda Almeida</h1> 
       </div>
   
       
        
    
    <CaretDown size={32} className=' mt-56 text-white mx-auto mb-10'/>
    </div>
   ) 
 }