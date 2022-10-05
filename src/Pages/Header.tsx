import logo from '../assets/logo.svg'

interface HeaderProps{
    action: Boolean;
    visibleHome: Boolean;
    visibleProject: Boolean;
    visibleAbout: Boolean;
  }

export function Header({action, visibleHome,  visibleProject, visibleAbout}:HeaderProps ) {
  
return (
    
  <div className=' fixed top-0 left-0 right-0  '>

  <header  className={action ? 'bg-black opacity-90 delay-100' : ''} >
     <div className="flex justify-between px-28">
     <div className='mt-2 '>
       <img src={logo} alt="" />
     </div>
     <div>
     <div className='flex justify-end text-sm gap-8 text-white mt-8 font-sans font-semibold uppercase h-8 '>
         <a  href="" className={visibleHome ? 'text-transparent bg-primary bg-clip-text' : ''}>Home</a>
         <a  href="" className={visibleProject ? 'text-transparent bg-primary bg-clip-text ' : ''}>Project</a>
       
        <a  href="" className={visibleAbout ? 'text-transparent bg-primary bg-clip-text' : ''}>About</a>
       
       </div> 
       
       </div>
       </div>
       
    </header>
    </div>
    
    )
    }