import React from 'react'

function Tren() {
  return (
    <div className='w-full h-[106vh]  mt-[100px] flex justify-evenly'>
      <p className='absolute text-[20px] ml-[-1150px] mt-[-45px]'>Trending Now</p>
        <div className='w-[46%] h-full bg-[yellow] bg-tren1'>
            <h1 className='pt-[510px] pl-[50px] text-[#fff] text-[23px] font-semibold'>National Team Fan Gear Collections</h1>
            <button className='ml-[50px] mt-[17px] w-[80px] h-[50px] rounded-[30px] bg-[#fff] hover:bg-[#6B6B6b]'>Shop</button>
        </div>
        <div className='w-[46%] h-full bg-[yellow] bg-tren2'>
        <h1 className='pt-[510px] pl-[50px] text-[black] text-[23px] font-semibold'>New from Nike Basketball</h1>
            <button className='ml-[50px] mt-[17px] w-[80px] h-[50px] rounded-[30px] bg-[black] text-[#fff] hover:bg-[#6B6B6b]'>Shop</button>
        </div>
    </div>
  )
}

export default Tren