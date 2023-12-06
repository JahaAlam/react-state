import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {
  let handleClick =()=>{
    alert('button cliked');

  }
  const handleClick2 = ()=>{
    alert('Button 2 Clicked');
  }
  const handleclick4 =(num)=>{
    alert(num+5);
  }
  

  return (
    <>
     
      <h1>React core concept recape! </h1>

      <Team></Team>

      
      <Counter></Counter>
      






      
      <button onClick={handleClick}>Clike Me</button>
      <button onClick={handleClick2}>Clike Me2</button>
      <button onClick={()=>{alert('3rd Clicked')}}>Clike Me3</button>
      <button onClick={()=>handleclick4(2)}>Clike Me4</button>
      
      
    </>
  )
}

export default App
