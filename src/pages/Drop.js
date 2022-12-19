import React from 'react'
import qizil from "../images/qizil.webp"
function Drop() {
  return (
    <div className='w-full h-[120vh] mt-[100px]'>
        <p className='pl-[40px] text-[18px] pt-[10px]'>Dropping 12.10</p>
        <img className='ml-[40px] mt-[20px]' src={qizil} alt="" />
    </div>
  )
}

export default Drop