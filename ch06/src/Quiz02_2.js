import React, { useMemo } from 'react'

const Quiz02_1 = ({ numbers }) => {
   // useMemo를 사용하여 홀수만 필터링하고 그 합계를 계산합니다.
   //const oddSum =

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {/* 여기에 결과를 출력하세요 */}</p>
      </div>
   )
}

export default Quiz02_1
