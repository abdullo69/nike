import React from 'react'

function More1() {
    return (
        <div className='w-full h-[100vh] mt-[50px]'>
            <p className='pl-[20px] text-[24px]'>More to Explore</p>
            <div className='w-full h-[85vh]  flex justify-around mt-[20px]'>
                <div className='w-[410px] h-full bg-[yellow] bg-more1 cursor-pointer'></div>
                <div className='w-[410px] h-full bg-[yellow] bg-more2 cursor-pointer'></div>
                <div className='w-[410px] h-full bg-[yellow] bg-more3 cursor-pointer'></div>
              
            </div>

            <div className='flex justify-around pt-[20px] text-[20px] w-[full] h-[30px]'>
                    <p>Kids' Yoga  Styles</p>
                    <p>Woman's Yoga Styles</p>
                    <p>Men's Yoga Styles</p>
                </div>
        </div>
    )
}

export default More1