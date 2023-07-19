import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Profile from "../assets/image/profile.jpeg"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [show,setShow] = useState(false);
  const toggle = () =>{
    console.log("test")
    setShow(true);
  }
  console.log(show)
  return (
    <>
    <nav className='m-auto fixed bottom-0 md:bottom-2 w-full md:w-[900px] md:rounded-full p-2 md:p-4 bg-indigo-600 flex justify-between'>
        <div className='flex gap-4 items-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/certificates">Certificates</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
        </div>
        <div onClick={toggle}>
            <NavLink  to="/"><img className='h-10 rounded-full' src={Profile} alt="profile_pic" /></NavLink>            
        </div>      
    </nav>
    {show && <div className='relative'>
          <Sidebar show={show} setShow={setShow}/>
        </div>}
    </>
  )
}

export default Navbar