import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Problem() {

  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'>READY WITH YOUR IDEA ?</h1>
      <div className='form'>
        <form className='form-apply'>
          <div className='name-head'>
            <label className='label-text'>Problem Statement : </label>
            <textarea className='textarea_problem' placeholder='problem to which you have solution' required />
          </div>
          <div className='name-head'>
            <label className='label-text'>Proposed Solution: </label>
            <textarea className='textarea_problem' placeholder='Solution You Found' required />
          </div>
        </form>
      </div>
    </>
  )
}

export default Problem;