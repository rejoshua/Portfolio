import React from 'react'
import Profile from "../assets/image/profile.jpeg"
const Home = () => {
  return (
    <div className='p-8'>
      <div className="flex flex-wrap gap-4">
        <img className='w-64 rounded-full' src={Profile} alt="profile__picture" />
        <div className='flex flex-col gap-2'> 
          <h1 className='font-bold text-5xl text-indigo-400'>Edward Joshua</h1>
          <p className='text-xl'>💻 Web developer</p>
        </div>
      </div>


      {/* About section */}

      <div className="py-8">
      <h1 className='text-2xl font-bold text-indigo-500'>About Me</h1>
      <p className='h-2 border-t-[4px] border-indigo-500 w-[120px]'></p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus libero harum temporibus, magni voluptate mollitia quis. Quo, illum. Eveniet molestiae ratione rerum suscipit, officia perspiciatis ex reiciendis maxime fugiat sed?</p>
      </div>


      {/* Contact section */}

      <div className="py-8">
      <h1 className='text-2xl font-bold text-indigo-500'>Contact</h1>
      <p className='h-2 border-t-[4px] border-indigo-500 w-[100px]'></p>
      <div className='p-4 flex flex-col h-[300px]'>
      
      <div className='flex flex-wrap flex-row gap-4 my-2'>
        <p className='font-bold text-lg'>Email :</p>
        <p>edwardjoshua@gmail.com</p>
      </div>

      <div className='flex flex-wrap flex-row gap-4 my-2'>
      <p className='font-bold text'>Github :</p>
        <p><a href="https://github.com/rejoshua" rel="noreferrer" target='_blank' className='text-black'>rejoshua</a></p>
      </div>
      
    


      </div>
      </div>

    </div>
  )
}

export default Home