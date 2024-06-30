import { useEffect, useRef } from 'react';
import './traficLights.css';
function TraficLights() {
  let currentColor = 'red'
  const red = useRef(null)
  const yellow = useRef(null)
  const green = useRef(null)
  function setColor(el, active){
    el.current.style.opacity = active ? 1 : 0.2;
  }
  useEffect(()=>{
    setColor(red, true)
  }, [])
  function switchColor() {
      if (currentColor === 'red'){
        currentColor = 'yellow'
        setColor(yellow, true)
        setColor(red)
      } else if(currentColor === 'yellow'){
        currentColor = 'green'
        setColor(green, true)
        setColor(yellow)
      } else {
        currentColor = 'red'
        setColor(red, true)
        setColor(green)
      }
  }
  return (
    <section>
      <div className='traficLight'>
        <div id='red' ref={red}></div>
        <div id='yellow' ref={yellow}></div>
        <div id='green' ref={green}></div>
      </div>
      <button id='switchBtn' onClick={switchColor}>Switch light</button>
    </section>
  )
}

export default TraficLights;
