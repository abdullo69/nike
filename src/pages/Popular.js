import React from 'react'
import k1 from "../images/k1.webp"
import k2 from "../images/k2.webp"
import k3 from "../images/k3.webp"
function Popular() {
    return (
        <div className='w-full h-[85vh] mt-[50px]'>
            <div className='w-full h-[65px]  flex items-center pl-[20px]  text-[20px]'>
                <p>Popular Right Now</p>
            </div>
            <div className='w-full h-full  flex justify-around'>
                <div className='w-[440px] h-full  relative'>
                    <div className='w-full h-[80 '>
                        <img className='w-full' src={k1} alt="" />
                        <p className=' absolute text-end pl-[400px] pt-[10px]'>95$</p>
                        <h1 className='pt-[10px]'>Nike Daybreak</h1>
                        <p className='text-[#757575]'>Women's Shoes</p>
                    </div>
                </div>
                <div className='w-[440px] h-full '>
                    <div className='w-full h-[80]'>
                        <img className='w-full' src={k2} alt="" />
                        <p className=' absolute text-end pl-[400px] pt-[10px]'>125$</p>
                        <h1 className='pt-[10px]'>Nike Dunk High Retro</h1>
                        <p className='text-[#757575]'>Men's Shoe</p>
                    </div>
                </div>
                <div className='w-[440px] h-full '>
                    <div className='w-full h-[80%]'>
                        <img className='w-full' src={k3} alt="" />
                        <p className=' absolute text-end pl-[400px] pt-[10px]'>200$</p>
                        <h1 className='pt-[10px]'>Air JOrdan 12 Retro</h1>
                        <p className='text-[#757575]'>Men's Shoes</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Popular