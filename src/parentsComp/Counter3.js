import React , {useState} from 'react'

export default function Counter3() {
    const [details, setDetails] = useState({
        count: 0,
        name: ''
    })
 function txtHNameandler(event){
   setDetails({...details, name: event.target.value})
 }
    function addHandler(){
        
        setDetails({...details, count: details.count + 1})
    }
  return (
    <div>
        <h2>useState with Object</h2>

        Enter your Name: <input name="txtName" autoFocus="autoFocus" onChange={txtHNameandler}/>
        <p>Hi, {details.name}, you clicked {details.count} times</p>

        <button style={{background :'#f400cf', padding:'10px'}} onClick={addHandler}>Add</button>
      
    </div>
  )
}
