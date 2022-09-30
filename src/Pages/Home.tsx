import eu from '../assets/eu.svg'
import logo from '../assets/logo.svg'
import {CaretDown} from 'phosphor-react'
import '../styles/main.css'

export function Home() {
    return (
        <body className='bg-black'>
    <header>
     <div>
       <a href=""><img src={logo} alt="" /></a>
       <div>
         <a href="">Home</a>
         <a href="">Project</a>
         <a href="">About</a>
       </div>
     </div>
    </header>
    <main>
        <div>
            <div>
               <h1>amanda almeida</h1> 
            </div>
        <div>
        <img src={eu} alt="" />
        </div>
        </div>
    </main>
    <CaretDown size={32} />
    </body>
    
   )
 }