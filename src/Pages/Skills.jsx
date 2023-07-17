import React from 'react'
import {SkillList} from "../data/SkillList"

const Skills = () => {
  
  return (
    <div className='p-8 flex flex-wrap gap-4'> 
      
      {SkillList.map((data)=>{
      return(
        <div key={data.id} className='my-4 w-[200px] rounded-md flex flex-row gap-4 border-[3px] border-indigo-500 p-2'>
          <img src={data.Image} alt={data.name} className='w-[50px]' />
          <p className='text-black'>{data.name}</p>
        </div>
      )
    })}
    
    </div>
  )
}

export default Skills