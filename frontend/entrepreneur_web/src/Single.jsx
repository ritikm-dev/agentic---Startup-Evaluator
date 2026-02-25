import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

function Single() {

  const Navigate = useNavigate();
  const [Department, Set_department] = useState("")
  const [name, Set_name] = useState("")
  const [idea, Set_idea] = useState("")
  const handle_button = async (e) =>{
    e.preventDefault();
    const data_send = {
      "department" : Department,
      "name" : name,
      "one_line_idea" : idea
    }
    const response = await fetch(
      url,
      {
        method :"POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(data_send)
      }
     );
     if (!response.ok){
        alert("Failed To send Data");
        throw new Error("Failed TO Fetch Data");        
     }
     else{
            Navigate("/problem")
            console.log(name,idea,Department)
     }
  }
  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1 style={{color : "white"}}>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'><center>READY WITH YOUR IDEA ?</center></h1>
      <div className='form'>
        <form className='form-apply' onSubmit={handle_button}>
          <div className='name-head'>
            <label>NAME : </label>
            <input type='text' placeholder='enter your name' className='name-input'onChange={(e)=>{Set_name(e.target.value)}} required />
          </div>
          <div className='name-head'>
            <label > Department: </label>
            <input type='text' placeholder='enter your department' className='name-input' onChange={(e)=>{Set_department(e.target.value)}} required />
          </div>
          <div className='name-head'>
            <label > One line idea: </label>
            <input type='text' placeholder='enter your one line idea' className='name-input' onChange={(e)=>{Set_idea(e.target.value)}} required />
          </div>
          <center> <button type='submit'>SUBMIT</button></center>
        </form>
      </div>
    </>
  )
}

export default Single;
