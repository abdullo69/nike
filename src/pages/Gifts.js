import React from 'react'

function Gifts() {
  return (
    <div className='w-full h-[80vh] mt-[70px]'>
       <div className='w-full h-[200px] text-center'>
        <h1 className='text-[60px] font-semibold'>GIFTS THAT CAN'T MISS</h1>
        <p className='pt-[5px]'>Everything to give all the impossible-to-gifts people on your list.</p>
        <button className='w-[100px] h-[50px] rounded-[30px] bg-[black] mt-[15px] text-[#fff] text-[20px] hover:bg-[#757575]'>Shop</button>
       </div>
       <div className='w-full h-[280px] bg-[blue] bg-img1 bg-no-repeat mt-[20px]'>
        <button className='w-[120px] h-[42px] bg-[black] rounded-[30px] ml-[50px] mt-[210px] text-[#fff] hover:bg-[#757575]'>Let's Play</button>
       </div>
    </div>
  )
}

export default Gifts