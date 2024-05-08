import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz02_sol() {
   const [display, setDisplay] = useState('none')

   return (
      <div>
         <img src={step1} width="150" style={{ display: 'block' }} />
         <img src={step2} width="150" style={{ display }} />
         <br />
         <button
            onClick={() => {
               setDisplay('block')
            }}
         >
            이상해씨 다음은?
         </button>
      </div>
   )
}

export default Quiz02_sol
