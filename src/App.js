import "./styles.css";
import React,{useState} from 'react'
function App(){
  let[Val,setVal]=useState("")
  return(
    <div>
      <h1>My input</h1>
      <input type="text" value={Val} onChange={(e)=>setVal(e.target.value)}/>
      <h3>Value:-{Val}</h3>
      </div>
  )
}
export default App;
