import React from 'react'
import ChildComponet from './ChildComponet';

const ParentsComponet = () => {
    const parentName="Willie";
    const greetParent =() =>{
        alert(`Hello ${parentName}`)
    }
  return (
    <div>
      <h3>Parent's Component...</h3>
      <ChildComponet sendgreet={greetParent}/>
    </div>
  )
}

export default ParentsComponet
