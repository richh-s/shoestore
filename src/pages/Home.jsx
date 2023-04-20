import React from 'react'
import shoes1 from '../../src/assets/shoes1.png'
import { IoArrowForward } from "react-icons/io5";
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='bg-dark h-[100vh] '>
      <Navbar/>
      <div className='hidden lg:flex justify-around mt-5'>
        <div className='flex flex-col justify-center text-lightyellow '>
          <h2 className='lg:text-6xl font-extrabold capitilize'>Live full, walk free</h2>
          <h4 className='w-[420px] my-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas repellendus omnis aspernatur accusantium accusamus laboriosam debitis.</h4>
            
          <button className="bg-brightyellow text-dark font-bold w-[150px] py-3 rounded-full inline-flex items-center justify-center">
             <span className='px-2'>shop now</span>
             <IoArrowForward size={25} className="animate-pulse"/>
             
         </button>
        </div>
        
        <img src={shoes1} alt="nike" className='w-[500px] mt-20'/>
      </div>
    </div>
  )
}

export default Home