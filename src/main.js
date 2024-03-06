import  IntersectionHandler  from "./intersection/IntersectionHandler"
import {welcomeTo} from './callbacks/welcomeTo'
import {aTesting} from './callbacks/aTesting'
import {microExample} from './callbacks/microExample'


(function () {
  IntersectionHandler.init({
    root: null, // tutto il dom
    rootMargin: '50px',
    threshold: 0.1
  })

  const callbacks = [
    welcomeTo,
    aTesting,
    microExample
  ]
    
  Array.from(document.querySelectorAll('.fullviewport')).forEach((el, index) => {
    const elementCallback = callbacks[index]
    if(elementCallback){
      IntersectionHandler.observe(el, elementCallback)
    }
  })
})();