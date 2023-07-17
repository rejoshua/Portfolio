import React from 'react'
import Profile from "../assets/image/profile.jpeg"
const Home = () => {
  return (
    <div className='p-8'>
      <div className="flex flex-wrap gap-4">
        <img className='w-64' src={Profile} alt="profile__picture" />
        <div className='flex flex-col gap-2'> 
          <h1 className='font-bold text-5xl text-indigo-400'>Edward Joshua</h1>
          <p className='text-xl'>💻 Web developer</p>
        </div>
      </div>
    </div>
  )
}

export default Home