import React from 'react'
import Product from './Product'
import { PRODUCTS } from '../../Data'
import Navbar from '../../components/navbar/Navbar'

const Shop = () => {
  return (
    <div className=' h-[auto] p-20 bg-dark w-[100%]'>
        <Navbar/>
        <div className='grid grid-cols-3 gap-3 place-items-center '>
           {PRODUCTS.map((product)=>(
            <Product data={product}/>
           ))}
        </div>
        
    </div>
  )
}

export default Shop