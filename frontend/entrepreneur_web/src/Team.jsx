import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, useNavigate } from 'react-router-dom'

function Team() {
  const Navigate = useNavigate();
  const handle_button = (e) =>{
    e.preventDefault();
    Navigate("/problem")

  }
  const [team_size , Setteam_size] = useState(0)
  const [Department, Set_department] = useState("")
  const [team_name, Set_teamName] = useState("")
  const [idea, Set_idea] = useState("")
  const [role,Set_role] = useState("")
  
  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'><center>READY WITH YOUR IDEA ?</center></h1>
      <div className='form'>
        <form className='form-apply' onSubmit={handle_button}>
          <div className='name-head'>
            <label >Name: </label>
            <input  type='text' placeholder='enter your name' className='name-input' required />
          </div>
            <div className='name-head'>
            <label style={{marginBottom : 20}}> Team Size: </label>
            <div className='role-group'>
            <label >
            <input type='radio' name='team_size' value='2'required checked={role === "2"} onChange={(e)=>{Setteam_size(e.target.value)}} />2
            </label>
            <label>
            <input  type='radio' name='team_size' value='3'required checked={role === "3"} onChange={(e)=>{Setteam_size(e.target.value)}} />3
            </label>
          </div>
          </div>
             <div className='name-head'>
            <label style={{marginBottom : 20}} > Role: </label>
            <div className='role-group'>
            <label>
            <input  type='radio' name='role' value='Founder'required checked={role === "Founder"} onChange={(e)=>{Set_role(e.target.value)}}/>Founder
            </label>
            <label>
            <input  type='radio' name='role' value='Co-Founder'required checked={role === "Co-Founder"} onChange={(e)=>{Set_role(e.target.value)}} />Co-Founder
            </label>
            <label>
            <input  type='radio' name='role' value='CEO'required checked={role === "CEO"} onChange={(e)=>{Set_role(e.target.value)}}/>CEO
            </label>
          </div>
          </div>
           <div className='name-head'>
            <label  > Team Name: </label>
            <input type='text' placeholder='enter your name' className='name-input' required onChange={(e)=>{Set_teamName(e.target.value)}} />
          </div>
          <div className='name-head'>
            <label > Department: </label>
            <input type='text' placeholder='enter your name' className='name-input' onChange={(e)=>{Set_department(e.target.value)}} required />
          </div>
          <div className='name-head'>
            <label > One line idea: </label>
            <input  type='text' placeholder='enter your name' className='name-input' required onChange={(e)=>{Set_idea(e.target.value)}} />
          </div>
         <center><button  type='submit'>SUBMIT</button></center>
        </form>
      </div>
    </>
  )
}

export default Team;
