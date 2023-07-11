import React, { useContext } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';



const Product = ({ product }) => {
    const { id, title, description, price, images } = product;
    const { favoritesToggle, favorites } = useContext(FavoritesContext);
    const { addToCart ,cart} = useContext(CartContext);


    // to obtain responsive img format
    let currentImg;
    if (images[1] === undefined) {
        currentImg = images[0];
    } else {
        currentImg = images[1];
    }

    return (
        <div className='dark:bg-slate-800 bg-gray-200 dark:text-slate-300 flex flex-col xl:w-[23%] lg:w-[31%] md:w-[48%]  w-[80%]  border-2 rounded-lg py-4 px-2 min-h-[550px] max-h-[600px] relative group transition hover:shadow-xl' >

            <div className='flex flex-col  gap-3 border-b border-slate-400 dark:border-slate-100 pb-4 mb-2'>
                <button onClick={() => favoritesToggle(product)} className='absolute top-6  right-0 group-hover:right-5  p-2 flex flex-col items-center justify-center
      gap-y-2 opacity-0 group-hover:opacity-100 transition-all rounded-full bg-sky-400'><AiFillHeart color={favorites.find((item) => item.id === product.id) ? "red" : "white"} size={28} /></button>

                <div className='px-5'>
                    <img alt='_' className='w-[100%] h-[250px] rounded-xl' src={currentImg} />

                </div>
                <h3 className='ps-5 text-2xl font-bold'>{title} </h3>
            </div>

            <p className='text-lg'>{description}</p>
            <div className='mt-auto' >
                <div className='flex items-center justify-between pb-2 px-4'>
                    <div className='text-sky-500 text-2xl font-medium italic'>{price} $</div>
                    <button
                        onClick={() => addToCart(product)}
                        className='flex items-center gap-3 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all 
                    dark:text-black border-2 dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300 
                    border-slate-900 rounded-xl bg-gray-100 py-2 px-3 font-medium'>
                        <span className='relative'><BsCart size={28} />
                            <span className='absolute bottom-7 right-8 bg-sky-500 px-2 rounded-full'>
                                {cart.find((item) => item.id === product.id) ? cart.find((item) => item.id === product.id).amount : ""}
                            </span>
                        </span>
                        <span>
                            Add To Basket
                        </span>
                    </button>
                </div>
                <Link to={`/product/${id}`} className='hover:border-b-2 pb-1 border-sky-500 text-sky-500 font-medium text-lg'> &rarr; Click to see details</Link>
            </div>


        </div >
    )
}

export default Product;