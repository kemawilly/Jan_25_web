import React from 'react'
import ParentsComponet from '../parentsComp/ParentsComponet'
// import ClassCompont from '../parentsComp/ClassCompont'
import StateManag from '../parentsComp/StateManag'
import StateMangWithCC from '../parentsComp/StateMangWithCC'
import Counter2 from '../parentsComp/Counter2'
import Counter3 from '../parentsComp/Counter3'

const MainBody = () => {
  return (
    <div className='mainbody'>
      Main body here...
      <ParentsComponet/>
      
      
      <StateMangWithCC/>
      <Counter3/>
      
    </div>
  )
}

export default MainBody
