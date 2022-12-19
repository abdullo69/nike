import React from 'react'
import nike from "../images/nike.png"
import search from "../images/search.png"
import shop from "../images/shop.png"
import like from "../images/like.png"
function Navbar2() {
  return (
    <div className='w-full h-[60px] flex items-center pl-[40px] z-[999] bg-[#fff]'>
      <img src={nike} alt="" />
      <div className='ml-[340px]  w-[35%] h-full  flex items-center justify-evenly '>


        <div className='cursor-pointer group/item1 h-full pt-[20px] group/item1'>New & Featured
          <div className='flex justify-around absolute w-full h-[300px] ml-[-472px] duration-[.5s] mt-[-500px] group-hover/item1:mt-[0px]   bg-[blue]  z-[888]'>
            <div className='w-[250px] h-full bg-[red] text text-[#AAAAAA] leading-[30px]'>
              <h1 className='text-[black]'>New & Featured</h1>
              <p>Member Early Acces Up to</p>
              <p>Shop All New Arrivals</p>
              <p>SNKRS Launch Calendar</p>
              <p>Best of Air Max</p>
              <p>New & Upcoming Drops</p>
              <p>Classic Kicks</p>
              <p>Jordan 11s & More</p>
              <p>Member Access</p>
              <p>New to Sale</p>
            </div>
            <div className='w-[250px] h-full bg-[red]'></div>
            <div className='w-[250px] h-full bg-[red]'></div>
            <div className='w-[250px] h-full bg-[red]'></div>
            <div className='w-[250px] h-full bg-[red]'></div>
          </div>
        </div>
       
       
       
        <div className='cursor-pointer h-full pt-[20px]'>Men</div>
        <div className='cursor-pointer h-full pt-[20px]'>Woman</div>
        <div className='cursor-pointer h-full pt-[20px]'>Kids</div>
        <div className='cursor-pointer h-full pt-[20px]'>Sale</div>
        <div className='cursor-pointer h-full pt-[20px]'>Gifts</div>
      </div>





      <div className='w-[300px] h-full ml-[150px] flex items-center'>
        <img className='absolute ml-[10px]' src={search} alt="" />
        <input className='bg-[#f5f5f5] w-[170px] h-[40px] pl-[50px] rounded-[20px] outline-none' type="text" placeholder='Search' />
        <img className='ml-[15px] cursor-pointer' src={shop} alt="" />
        <img className='ml-[15px] cursor-pointer' src={like} alt="" />
      </div>
    </div>
  )
}

export default Navbar2