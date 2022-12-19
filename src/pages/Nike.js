import React from 'react'
import nik from "../images/nike.webp"
function Nike() {
  return (
    <div className='w-full h-screen bg-[#fff] mt-[50px] pl-[50px] '>
      <a href="www.nike.com"><img className='cursor-pointer' src={nik} alt="" /></a>
    </div>
  )
}

export default Nike