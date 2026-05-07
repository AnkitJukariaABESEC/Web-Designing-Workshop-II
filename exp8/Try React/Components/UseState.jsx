import React,{useState} from 'react'

export default function UseState() {
    const[counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);
    }
  return (
  <>
  <h1>{counter}</h1>
  <button onClick={increment} style={{backgroundColor:"greenyellow",height:"50px",width:"100px",margin:"auto",marginBottom:"5px"}}>+</button>
  <button onClick={decrement} style={{backgroundColor:"greenyellow",height:"50px",width:"100px",margin:"auto",marginBottom:"5px"}}>-</button>
  <button onClick={reset} style={{backgroundColor:"greenyellow",height:"50px",width:"100px",margin:"auto",marginBottom:"5px"}}>reset</button>
  </>
  )
}
