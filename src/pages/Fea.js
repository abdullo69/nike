import React from 'react'

function Fea() {
  return (
    <div className='w-full h-[106vh]  mt-[100px] flex justify-evenly'>
    <p className='absolute text-[20px] ml-[-1150px] mt-[-45px]'>Featured Styles</p>
      <div className='w-[46%] h-full bg-[yellow] bg-fea1'>
          <h1 className='pt-[480px] pl-[50px] text-[#fff] text-[23px] font-semibold'>Introduct Nike <br /> Go Leggings</h1>
          <button className='ml-[50px] mt-[17px] w-[80px] h-[50px] rounded-[30px] bg-[#fff] hover:bg-[#6B6B6b]'>Shop</button>
      </div>
      <div className='w-[46%] h-full bg-[yellow] bg-fea2'>
      <h1 className='pt-[480px] pl-[50px]  text-[23px] text-[#fff] font-semibold'>Winter Fit <br /> Checklist</h1>
          <button className='ml-[50px] mt-[17px] w-[80px] h-[50px] rounded-[30px] bg-[#fff] hover:bg-[#6B6B6b]'>Shop</button>
      </div>
  </div>
  )
}

export default Fea