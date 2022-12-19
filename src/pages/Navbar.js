import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
function Navbar() {
  return (
    <div className='w-full h-[35px] bg-[#f5f5f5] flex z-[999]'>
      <img className='ml-[40px] cover' src={icon1} alt="" />
      <img className='ml-[20px]' src={icon2} alt="" />
      <div className='w-[500px] ml-[745px] h-[full]  flex items-center justify-center text-[#111111]   text-[15px]'>
        <p className='pl-[20px] hover:text-[gray] cursor-pointer'>Find a Store</p>
        <p className='pl-[20px] hover:text-[gray] cursor-pointer'>Help</p>
        <p className='pl-[20px] hover:text-[gray] cursor-pointer'>Join Us</p>
        <p className='pl-[20px] hover:text-[gray] cursor-pointer'>Sign In</p>
      </div>
    </div>
  )
}

export default Navbar