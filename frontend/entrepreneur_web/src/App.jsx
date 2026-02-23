import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
function App() {
  const Navigate = useNavigate();
  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'>READY WITH YOUR IDEA ?</h1>
      <div className='button-container'>
        <button onClick={()=>{Navigate("/single")}}>SINGLE FOUNDER</button> 
        <button onClick={()=>{Navigate("/team")}}>TEAM</button>
      </div>
    </>
  )
}

export default App;
