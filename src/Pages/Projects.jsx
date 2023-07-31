import React from 'react'
import { ProjectsList } from '../data/ProjectsList'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='flex justify-center flex-wrap gap-4 p-4'>
        {ProjectsList.map((data)=>{
          const {id,title,description,image,github,live}=data;
          return(
            <div key={id} className='flex flex-wrap justify-center gap-2 md:gap-4 items-center rounded-md cape bg-teal-200'>
              <div className='p-2'>
                <img className='w-[350px] md:w-[400px]' src={image} alt="" />
              </div>
              <div className='w-[300px] flex flex-col gap-2 h-auto md:h-[250px] p-2'>
                <h1 className='text-xl font-bold capitalize'>{title}</h1>
                <p className='text-sm'>{description}</p>
                <div>
                  <ul className='flex gap-4'>
                    <li><a className='text-black' href={github}>github</a></li>
                    <li><a className='text-black' href={live}>live</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default Projects