import React, { useContext } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';



const Product = ({ product }) => {
    const { id, title, description, price, images } = product;
    const {favoritesToggle,favorites} = useContext(FavoritesContext);
    const {addToCart} = useContext(CartContext);

    


    // to obtain responsive img format
    let currentImg; 
     if (images[1] === undefined) {
        currentImg = images[0];
    }else {
        currentImg=images[1];
    }
    
    return (
        <div className='dark:bg-slate-800 bg-gray-200 dark:text-slate-300 flex flex-col xl:w-[23%] lg:w-[31%] md:w-[48%]  w-[80%]  border-2 rounded-lg py-4 px-2 h-[530px] relative group transition hover:shadow-xl' >

            <div className='flex flex-col  gap-3 border-b border-slate-400 dark:border-slate-100 pb-4 mb-2'>
                <button onClick={() => favoritesToggle(product)} className='absolute top-6  right-0 group-hover:right-5  p-2 flex flex-col items-center justify-center
      gap-y-2 opacity-0 group-hover:opacity-100 transition-all rounded-full bg-sky-400'><AiFillHeart color={favorites.includes(product) ? "red" : "white"} size={28}/></button>                
            
                <div className='px-5'>
                <img alt='_' className='w-[100%] h-[250px] rounded-xl' src={currentImg} />

                </div>
                <h3 className='ps-5 text-2xl font-bold'>{title} </h3>
            </div>

            <p className='text-lg'>{description}</p>
            <div className='mt-auto' >
                <div className='flex items-center gap-5 pb-2'>
                    <div className='text-sky-500 text-2xl font-medium italic'>{price} $</div>
                    <button onClick={() => addToCart(product)}  className='dark:text-black border-2 border-slate-900 rounded-xl bg-gray-100 py-2 px-3 font-medium'>Add To Basket</button>
                </div>
                <Link to={`/product/${id}`} className='text-sky-500 font-medium'>Click to see details..</Link>
            </div>


        </div >
    )
}

export default Product;