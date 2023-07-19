import React from 'react'
import {GrClose} from'react-icons/gr'
import {TiSocialLinkedin,TiSocialInstagram,TiSocialGithub,TiPhone,TiMail} from 'react-icons/ti'

const Sidebar = ({show,setShow}) => {
  const handleClick = () => {
    setShow(false);
    window.scrollTo(0,0)
  }
  return (
    <div className='fixed right-0 w-full bg-white h-screen'>
      
    <div className="w-screen h-screen flex flex-col gap-8 items-center justify-center">

      <li className='list-none flex items-center gap-4'><TiPhone size={'40px'}/> Facebook</li>
      <li className='list-none flex items-center gap-4'><TiSocialLinkedin size={'40px'}/>Facebook</li>
      <li className='list-none flex items-center gap-4'><TiSocialInstagram size={'40px'}/>Facebook</li>
      <li className='list-none flex items-center gap-4'><TiSocialGithub size={'40px'}/> Facebook</li>
      <li className='list-none flex items-center gap-4'><TiMail size={'40px'}/> Facebook</li>


    <button className='absolute top-2 right-2' onClick={handleClick}><GrClose/></button>
    </div>
    </div>
  )
}

export default Sidebar