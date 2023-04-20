import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [nav,setNav]=useState(false)
  return (
    <nav className='p-2 bg-dark w-[100%] absolute top-0 left-0'>
      <div className='flex items-center justify-between capitalize w-full px-9 py-2'>
       <h1 className=' text-4xl italic font-semibold text-yellow'>kicks</h1>
        <div className=' hidden lg:flex text-lightyellow cursor-pointer'>
          <Link to="/">
            <h2 className='px-4 hover:text-xl hover:text-yellow'>home</h2>
          </Link>
         
          <Link to="/shoes">
            <h2 className='px-4 hover:text-xl hover:text-yellow'>shoes</h2>
          </Link>
        </div>
        <div className='hidden lg:flex'>
           <HiOutlineShoppingCart size={25} className="text-yellow cursor-pointer"/>
        </div>
      {/* mobile menu */}
        <div onClick={()=>setNav(!nav)} className="cursor-pointer lg:hidden text-yellow z-10 pr-1">
           {nav? <FaTimes size={24}/>: <FaBars size={24}/>}
         </div>
         {nav && (
          <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-dark p-4'>
            <div className=' text-lightyellow'>
              <h2 className='p-4 hover:text-xl hover:text-yellow'>home</h2>
              <h2 className='p-4 hover:text-xl hover:text-yellow'>shoes</h2>
            </div>
            <div className='flex'>
              <Link to="/shoes">
                <button className='bg-yellow text-black rounded-md px-8 py-1 my-2'>shop now</button>
              </Link>
            </div>
          </div>
         )}

      </div>

      
    </nav>
    
  )
}

export default Navbar