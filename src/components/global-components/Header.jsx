import React from 'react'
import profile from '../../assets/icons/profile2.svg'
import logout from '../../assets/icons/logout.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex justify-end items-center px-10 z-[500] bg-white shadow-md '>
      <div className='w-full max-w-[200px] flex justify-end items-center gap-4 py-3'>
        <div>
          <img src={profile} className='w-[28px] cursor-pointer active:scale-[0.95]' alt="" />
        </div>
        <div className='w-[1px] h-[22px] bg-[#414141]'></div>
        <div>
          <Link to='/login'><img src={logout} className='w-[25px] cursor-pointer active:scale-[0.95]' alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header