import React, {useState} from 'react'

export default function Counter2() {
    const [count, setCount]= useState(0);
    const [name, setName] = useState("Willie");
    console.log(name);

    function addNumz(){
        setCount(count + 1)
    }
    function txtHandler(event){
        setName(event.target.value)
        setCount(0)
    }
  return (
    <div>
        <h3> useState With Text Field</h3>
        Enter the your name: <input name='txtname' onChange={txtHandler} autoFocus='autoFocus'/>
        <p>Hi  {name}, you clicked {count} times</p>

        <button onClick={addNumz} style={{background: '#5f6cb0', padding:'6px', color:'#fff'}}>Add</button>
      
    </div>
  )
}
