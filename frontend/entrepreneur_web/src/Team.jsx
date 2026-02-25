import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Team() {
  const navigate = useNavigate();
  const [team_size, setTeamSize] = useState(0)
  const [members, setMembers] = useState([])
  const [department, setDepartment] = useState([])
  const [team_name, setTeamName] = useState("")
  const [idea, setIdea] = useState("")
  const [role, setRole] = useState([])

  const handle_button = async (e) => {
    e.preventDefault();
    const data_send = {
      "name" : members,
      "department": department,
      "team_size": team_size,
      "one_line_idea": idea,
      "role": role,
      "team_name": team_name
    }
    
    try {
      const response = await fetch(
        "http://localhost:8000/teamform/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data_send)
        }
      );
      
      if (!response.ok) {
        alert("Failed to send data");
        return;
      }
      
      const data = await response.json()
      console.log(data)
      navigate("/problem")
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <>
      <title>VENTURE STUDIO</title>
      <div className='heading-top'>
        <h1>VENTURE STUDIO</h1>
      </div>
      <h1 className='page-title'><center>READY WITH YOUR IDEA ?</center></h1>
      <div className='form'>
        <form className='form-apply' onSubmit={handle_button}>
          {members.map((member, index) => (
            <div className='name-head' key={`member-${index}`}>
              <label htmlFor={`member-${index}`}>Member {index + 1} Name: </label>
              <input 
                id={`member-${index}`}
                type='text' 
                placeholder='enter your name' 
                className='name-input' 
                required 
                value={member}
                onChange={(e) => {
                  const updated_members = [...members]
                  updated_members[index] = e.target.value
                  setMembers(updated_members)
                }}
              />
            </div>
          ))}
         
          <div className='name-head'>
            <label style={{ marginBottom: 20 }}>Team Size: </label>
            <div className='role-group'>
              <label>
                <input 
                  type='radio' 
                  name='team_size' 
                  value='2' 
                  required 
                  checked={team_size === 2}
                  onChange={(e) => {
                    const size = parseInt(e.target.value);
                    setTeamSize(size);
                    setMembers(Array(size).fill(""));
                    setDepartment(Array(size).fill(""));
                    setRole(Array(size).fill(""));
                  }} 
                />
                2
              </label>
              <label>
                <input 
                  type='radio' 
                  name='team_size' 
                  value='3' 
                  required 
                  checked={team_size === 3}
                  onChange={(e) => {
                    const size = parseInt(e.target.value);
                    setTeamSize(size);
                    setMembers(Array(size).fill(""));
                    setDepartment(Array(size).fill(""));
                    setRole(Array(size).fill(""));
                  }} 
                />
                3
              </label>
            </div>
          </div>

          {role.map((roleValue, index) => (
            <div className='name-head' key={`role-${index}`}>
              <label style={{ marginBottom: 20 }}>Member {index + 1}'s Role: </label>
              <div className='role-group'>
                <label>
                  <input 
                    type='radio' 
                    name={`role-${index}`}
                    value='Founder' 
                    required 
                    checked={roleValue === "Founder"}
                    onChange={(e) => {
                      const updated_roles = [...role];
                      updated_roles[index] = e.target.value;
                      setRole(updated_roles);
                    }} 
                  />
                  Founder
                </label>
                <label>
                  <input 
                    type='radio' 
                    name={`role-${index}`}
                    value='Co-Founder' 
                    required 
                    checked={roleValue === "Co-Founder"}
                    onChange={(e) => {
                      const updated_roles = [...role];
                      updated_roles[index] = e.target.value;
                      setRole(updated_roles);
                    }} 
                  />
                  Co-Founder
                </label>
                <label>
                  <input 
                    type='radio' 
                    name={`role-${index}`}
                    value='CEO' 
                    required 
                    checked={roleValue === "CEO"}
                    onChange={(e) => {
                      const updated_roles = [...role];
                      updated_roles[index] = e.target.value;
                      setRole(updated_roles);
                    }} 
                  />
                  CEO
                </label>
              </div>
            </div>
          ))}
          
          <div className='name-head'>
            <label htmlFor='team-name'>Team Name: </label>
            <input 
              id='team-name'
              type='text' 
              placeholder='enter your team name' 
              className='name-input' 
              required 
              value={team_name}
              onChange={(e) => setTeamName(e.target.value)} 
            />
          </div>

          {department.map((dept, index) => (
            <div className='name-head' key={`dept-${index}`}>
              <label htmlFor={`dept-${index}`}>Member {index + 1}'s Department: </label>
              <input 
                id={`dept-${index}`}
                type='text' 
                placeholder='enter department' 
                className='name-input' 
                value={dept}
                onChange={(e) => {
                  const updated_departments = [...department];
                  updated_departments[index] = e.target.value;
                  setDepartment(updated_departments);
                }} 
                required 
              />
            </div>
          ))}

          <div className='name-head'>
            <label htmlFor='idea'>One line idea: </label>
            <input 
              id='idea'
              type='text' 
              placeholder='enter your idea' 
              className='name-input' 
              required 
              value={idea}
              onChange={(e) => setIdea(e.target.value)} 
            />
          </div>

          <center>
            <button type='submit'>SUBMIT</button>
          </center>
        </form>
      </div>
    </>
  )
}

export default Team;