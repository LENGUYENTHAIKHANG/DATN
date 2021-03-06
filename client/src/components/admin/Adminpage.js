import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './admin.css'

import Rightadmin from './Rightadmin'



function Adminpage() {
    
    const [user,setuser]=useState([])
    const [load,setload]=useState(1)
    useEffect(() => {
        axios.get(`https://tknw.herokuapp.com/api/alluser`)
        .then(res => {
        
         setuser(res.data[0]);
        
        })
        .catch(error => console.log(error));
    }, [load]);
    const [userid,setUserid]=useState('628491313d86200adc4186ec')
    
    
  return (
    <>
    <div className='admin-header'>ADMIN</div>
    <div className='admin'>
        {console.log(userid)}
        <div className='left-admin'>
        {user.map(u=>(
            <div className='admin-user-card'  onClick={()=>setUserid(u._id)}> 
            <div className='admin-user-info'>
                <img className='admin-user-avt' src={u.avatar}/>
               
                    <h4>{u.username}</h4>
                 
                    <p>{u.email}</p>
                    <p><i class="material-icons">male</i>{u.gender}</p>
                </div>
                <div style={{display:'flex'}}>
                <p className='admin-followed'>{u.followers.length}  follower</p>
                <p className='admin-followed'>{u.following.length}  following</p>
                <p className='admin-followed'>{u.saved.length}  saved</p>
                
                    

                </div>
                <div>
                    <button className='admin-delete-user' onClick={()=>{window.confirm("Press a button!");axios.delete(`http://localhost:3000/api/deleteuser/${u._id}`);setload(load+1)}}>delete user</button>
                </div>
               
            </div>
        ))}
        </div>
        <Rightadmin id={userid}/>
    </div>
    </>
  )
}

export default Adminpage