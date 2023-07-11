import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinusSquare, AiOutlinePlusSquare, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "../App.css"

import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';



const ProductDetails = () => {
  const { favoritesToggle, favorites } = useContext(FavoritesContext)
  const { quantity, setQuantity, addFromDetails, cart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1)
    }
  }



  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data)  
      } catch (error) {
        console.log('an error was occured');
      }
    };

    fetchSingleProduct();

  }, [id])




  

  return (
    <div className='py-8 ps-8 min-h-[80vh] flex items-center justify-center lg:justify-start rounded-xl'>
      {product ?
        <div className='flex lg:flex-row flex-col border border-2 gap-5 p-8 dark:bg-slate-800 bg-gray-200 dark:text-slate-300'>
          <div>
            <img className='mx-auto w-[400px] ' alt='_' src={product.images[0]} />
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <h2 className="text-3xl font-bold pb-4">{product.title}</h2>
              <p className='pb-4 max-w-[400px]'>{product.description}</p>
              <div className='flex items-center '>
                <span className='dark:text-slate-800 font-medium text-xl mr-4 bg-slate-100 py-1 px-2 '> Quantity : {quantity}</span>
                <button onClick={decreaseQuantity} className='dark:hover:bg-slate-100 dark:hover:text-slate-800 hover:bg-slate-300 transition-all hover:bg-slate-800 hover:text-slate-100'><AiOutlineMinusSquare size={40} /></button>
                <button onClick={() => { setQuantity(quantity + 1) }} className='dark:hover:bg-slate-100 dark:hover:text-slate-800 hover:bg-slate-300 transition-all hover:bg-slate-800 hover:text-slate-100'>  <AiOutlinePlusSquare size={40} /> </button>
              </div>
            </div>
            <div className='flex flex-col items-end gap-3'>
              <p
                className='unselectable dark:text-sky-500 text-sky-700 text-2xl font-medium italic'>Price : {product.price} $</p>
              <div className='flex justify-end gap-3'>
                <button
                  onClick={() => favoritesToggle(product)}
                  className='hover:bg-slate-300 dark:hover:bg-slate-700 transition-all dark:text-black 
              border-2 dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300  
              border-slate-900 rounded-xl bg-gray-100 py-2 px-3 font-medium'>
                  {favorites.find((item) => item.id === product.id) ?
                    (<span className='flex items-center gap-3' ><AiFillHeart color="red" size={28} /> Remove from favorites</span>)
                    : (<span className='flex items-center gap-3'><AiOutlineHeart size={28} /> Add to Favorites</span>)}
                </button>
                <button
                  onClick={() => addFromDetails(product)}
                  className='flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all dark:text-black 
              border-2 dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300  border-slate-900
               rounded-xl bg-gray-100 py-1 px-3 font-medium'>
                  <span className='relative'><BsCart size={45} />
                    <span className='absolute top-2 left-[18px]'>
                      {cart.find((item) => item.id === product.id) ? cart.find((item) => item.id === product.id).amount : ""}
                    </span>
                  </span>
                  <span>
                    Add To Basket
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
        : ""}


    </div>

  )
}

export default ProductDetails