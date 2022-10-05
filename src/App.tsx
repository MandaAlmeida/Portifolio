import { useEffect, useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Header } from "./Pages/Header";
import { Home } from "./Pages/Home";
import { Project } from "./Pages/Project";
import { Skills } from "./Pages/Skills";



function App() {

  
  const [activeCor, setactiveCor] =  useState(false)
  const [visibleHome, setVibilityHome] = useState(true)
  const [visibleProject, setVibilityProject] = useState(false)
  const [visibleAbout, setVibilityAbout] = useState(false)

 

  useEffect(function(){
    function positionScroll(){
      if(window.scrollY > 10){
        setactiveCor(true)
      } else {
        setactiveCor(false);
      }
      if(window.scrollY >= 0){
        setVibilityHome(true);
        setVibilityProject(false);
        setVibilityAbout(false);
      } else {
        setVibilityHome(false);
      }
      if(window.scrollY > 1788){
        setVibilityProject(true);
        setVibilityHome(false);
        setVibilityAbout(false);
      } else {
        setVibilityProject(false);
      }
      if(window.scrollY > 4000 ){
        setVibilityAbout(true);
        setVibilityProject(false);
        setVibilityHome(false);
      } else if (window.scrollY < 5000){
        setVibilityAbout(false);
      }
    }

    window.addEventListener('scroll', positionScroll)

  }, []); 
  
  
 
 
   console.log(window.scrollY)

   return (
    <div className="px-28 relative " >
     <Header action={activeCor} visibleHome={visibleHome} visibleProject={visibleProject} visibleAbout={visibleAbout}/>
     <Home />
    <Skills />
    <Project />
    <About />
    <Contact />
    </div>
  )
}

export default App
