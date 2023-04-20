import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount =cartItems[id];




  return (
    <div className='bg-slate  my-5 rounded-md flex flex-col items-center justify-between w-[330px] h-[350px] '>
        <div className='bg-beige w-[100%] p-7 h-[300px] flex justify-center items-center'>
           <img src={productImage} alt="img" className='w-[150px] '/> 
        </div>
        
        <div className='p-3 capitalize'>
            <h2 className='text-center font-semibold'>{productName}</h2>
            <h4 className='text-center text-dark underline'>${price}</h4>
        <button className='bg-dark rounded-md px-4 py-2 mt-4 text-brightyellow uppercase' onClick={()=>addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
        </div>
    </div>
  )
}

export default Product