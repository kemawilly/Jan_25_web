import React from 'react'

const ChildComponet = (props) => {
  return (
    <div>
      <h4>Child Greet Parent</h4>
      <button onClick={props.sendgreet}>Greet Parent</button>
    </div>
  )
}

export default ChildComponet
