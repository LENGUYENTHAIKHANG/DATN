import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

import './admin.css'

function Rightadmin(props) {
  const [postid,setPostid]=useState([]);
  const [textmgs,setTextmgs]=useState('')
  const clickmess=()=>{
    axios.post(`http://localhost:3000/api/messageadmin`, {
      sender:"62b6c846dc755626b8baf0a1",
      recipient:props.id,
      text:textmgs
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  useEffect(() => {
    axios.get(`https://tknw.herokuapp.com/api//user_post/${props.id}`)
        .then(res => {
        
          setPostid(res.data.posts);
          console.log(res.data.posts)
        
        })
        .catch(error => console.log(error));
  
  }, [props.id])
  
  return (
    <div>
    {postid.map(u=>(
      <div className='adminpost'>
     <div >
       <span className="material-icons delete-post-admin">delete_outline</span> 
       </div>                    
        <h3>{u.content}</h3>
        <div className='admin-post-admin' >
        {u.images.map(img=>(
          <div >
            <img  src={img.url} width="400px" placeholder='....'/>

          </div>


          

        ))}
        </div>
       <input className='admin-input' type='text' onChange={(e)=>{setTextmgs(e.target.value);console.log(e.target.value)}}  />
       <button className='admin-button' onClick={clickmess} >Send</button>
        </div>
    ))}
    </div>
  )
}

export default Rightadmin