import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz02() {
   const [displayStates, setDisplayStates] = useState({
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1,
   })

   return (
      <div>
         <img src={step1} width="150" style={{ display: displayStates.display1 }} />
         <img src={step2} width="150" style={{ display: displayStates.display2 }} />
         <img src={step3} width="150" style={{ display: displayStates.display3 }} />

         <br />

         <button>이상해씨 진화!</button>
         <button>이상해꽃 진화!</button>
         <p>진화 끝!</p>
      </div>
   )
}

export default Quiz02
