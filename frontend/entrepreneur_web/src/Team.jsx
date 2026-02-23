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
            <label style={{ fontSize: 30, fontWeight: 'bolder', marginRight: 10 }}>NAME : </label>
            <input style={{ fontSize: 30, fontWeight: "bold" }} type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label style={{ fontSize: 30, fontWeight: 'bolder', marginRight: 10 }}> Department: </label>
            <input style={{ fontSize: 30, fontWeight: "bold" }} type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label style={{ fontSize: 30, fontWeight: 'bolder', marginRight: 10 }}> One line idea: </label>
            <input style={{ fontSize: 30, fontWeight: "bold" }} type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label style={{ fontSize: 30, fontWeight: 'bolder', marginRight: 10 }}> Problem Statement: </label>
            <input style={{ fontSize: 30, fontWeight: "bold" }} type='text' placeholder='enter your name' className='name-input' required />
          </div>
          <div className='name-head'>
            <label style={{ fontSize: 30, fontWeight: 'bolder', marginRight: 10 }}> Proposed Solution: </label>
            <input style={{ fontSize: 30, fontWeight: "bold" }} type='text' placeholder='enter your name' className='name-input' required />
          </div>
        </form>
      </div>
    </>
  )
}

export default Team;
