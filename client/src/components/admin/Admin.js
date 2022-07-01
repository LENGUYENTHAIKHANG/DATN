import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./admin.css"


function Admin() {
    const dataadmin={
        email:'admin@gmail.com',
        pass:'14012000'
    }
    const history = useHistory()
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')

    const handleonclick=()=>{
        if(email==dataadmin.email&&pass==dataadmin.pass){
        history.push("/adminpage")}
        else {
            alert("lỗi")
        }
    }
  return (
    <div className='admin-login'>
        <label>Email</label>
        <br/>
        <input className='admin-input' type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <br></br>
        <label>Password</label>
        <br/>
        <input className='admin-input' type="Password" value={pass} onChange={(e)=>setpass(e.target.value)} />
        <br/>
        <button className='admin-button' onClick={handleonclick}>login</button>

    </div>
  )
}

export default Admin