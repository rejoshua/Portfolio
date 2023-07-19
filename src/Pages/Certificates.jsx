import React from 'react'
import { CertificateList } from '../data/CertificateList'

const Certificates = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-indigo-500'>
      Certificates</h1>
      <p className='h-2 border-t-[4px] border-indigo-500 w-[150px]'></p>
      <div>
        {CertificateList.map((data)=>{
          return(
            <div key={data.id} className='mb-24'>
              <h1 className='text-base font-medium my-2 underline'>{data.name}</h1>
              <img src={data.Image} alt={data.name} />
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default Certificates