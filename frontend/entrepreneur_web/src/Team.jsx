import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Team() {

  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 style={{ fontSize: 40, marginTop: 10 }}><center>READY WITH YOUR IDEA ?</center></h1>
      <div className='form'>
        <form className='form-apply'>
          <div className='name-head'>
            <label >Name: </label>
            <input  type='text' placeholder='enter your name' className='name-input' required />
          </div>
            <div className='name-head'>
            <label > Team Size: </label>
            <div className='role-group'>
            <label>
            <input  type='radio' name='team_size' value='2'required />2
            </label>
            <label>
            <input  type='radio' name='team_size' value='3'required />3
            </label>
          </div>
          </div>
             <div className='name-head'>
            <label > Role: </label>
            <div className='role-group'>
            <label>
            <input  type='radio' name='role' value='Founder'required />Founder
            </label>
            <label>
            <input  type='radio' name='role' value='Co-Founder'required />Co-Founder
            </label>
            <label>
            <input  type='radio' name='role' value='CEO'required />CEO
            </label>
          </div>
          </div>
           <div className='name-head'>
            <label > Team Name: </label>
            <input type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label > Department: </label>
            <input type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label > One line idea: </label>
            <input  type='text' placeholder='enter your name' className='name-input' required />
          </div>
         
        </form>
      </div>
    </>
  )
}

export default Team;
