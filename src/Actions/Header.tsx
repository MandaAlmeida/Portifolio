import { useEffect, useState } from "react";

export function onScroll(){
const [activeCor, setactiveCor] =  useState(false)


useEffect(function(){
  function positionScroll(){
    if(window.scrollY > 1){
      setactiveCor(true)
    } else {
      setactiveCor(false);
    }
  }

  window.addEventListener('scroll', positionScroll)

}, []);

}