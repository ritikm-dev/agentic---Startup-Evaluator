import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

function App() {

  const Navigate = useNavigate();
  async function handle_single() {

    try {
      const res = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "message": "single"
        })
      })
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        Navigate("/single")
      }
      else {
        alert("Something went wrong")
        console.log("hi");
      }

    }
    catch (error) {
      alert("Server not responding please try again later or check your connection");
      console.log(error);
    }
  }

async function handle_team() {

    try {
      const res = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "message": "Team"
        })
      })
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        Navigate("/team")
      }
      else {
        alert("Something went wrong")
        console.log("hi");
      }

    }
    catch (error) {
      alert("Server not responding please try again later or check your connection");
      console.log(error);
    }
  }


  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'>READY WITH YOUR IDEA ?</h1>
      <div className='button-container'>
        <button onClick={handle_single}>SINGLE FOUNDER</button>
        <button onClick={handle_team}>TEAM</button>
      </div>
    </>
  )
}

export default App;
