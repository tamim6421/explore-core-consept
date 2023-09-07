import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button click')
  }
  const handleClick2 = () =>{
    alert('button click2')
  }
  return (
    <>
  
      <h1> React Core Concepts</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      
      



      <button onClick={handleClick} > Click me</button>
      <button onClick={handleClick2} > Click me2</button>
      <button onClick={()=>alert('click me')} > Click me3</button>
    </>
  )
}

export default App
