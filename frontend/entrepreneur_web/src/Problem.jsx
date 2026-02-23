import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useActionData } from 'react-router-dom'

function Problem() {
  const handle_button = (e) =>{
    e.preventDefault();
  }
  const [problem_statement, SetPS] = useState("")
  const [proposed_sol,SetSolution] = useState("")
  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'>READY WITH YOUR IDEA ?</h1>
      <div className='form'>
        <form className='form-apply' onSubmit={handle_button}>
          <div className='name-head'>
            <label className='label-text'>Problem Statement : </label>
            <textarea className='textarea_problem' placeholder='problem to which you have solution' required onChange={(e)=>{SetPS(e.target.value)}} />
          </div>
          <div className='name-head'>
            <label className='label-text'>Proposed Solution: </label>
            <textarea className='textarea_problem' placeholder='Solution You Found' required onChange={(e)=>{SetSolution(e.target.value)}} />
          </div>
         <center> <button type='submit'>SUBMIT</button></center>
        </form>
      </div>
    </>
  )
}

export default Problem;