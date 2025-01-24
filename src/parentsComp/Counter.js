import React, {useState} from 'react'

export default function Counter() {
   const [count, setCount]= useState(0);
   // console.log(count)
   
    function addNum(){   setCount(count + 1);    }
    function subNum(){  
        if (count >0) setCount(count - 1);    }
    function defaultNum(){   setCount(0);    }
  return (
    <div>
        <h3>Counter Button:{count} </h3>
        <button onClick={addNum} style={{ background: '#046600', color: '#fff', cursor: 'pointer' }}>
        Add
      </button>
      |
      <button onClick={subNum} style={{ background: '#046600', color: '#fff', cursor: 'pointer' }}>
        Substract
      </button>
      
      <button onClick={defaultNum} style={{ background: '#046600', color: '#fff', cursor: 'pointer' }}>
        Reset
      </button>
      
    </div>
  )
}
