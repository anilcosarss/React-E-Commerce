import React, { useContext } from 'react'
import { FavoritesContext } from '../contexts/FavoritesContext'
import { AiFillHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'

const Favorites = () => {
  const { favoritesToggle, favorites } = useContext(FavoritesContext);
  const { addToCart,cart } = useContext(CartContext);


  return (
    <>
      {favorites.length !== 0 ?
        <div className='flex py-16 flex-wrap justify-center items-center gap-x-5 gap-y-8' >
          {favorites.map((favorite) => (
            <div key={favorite.id} className='dark:bg-slate-800 bg-gray-200 dark:text-slate-300 flex flex-col xl:w-[23%] lg:w-[31%] md:w-[48%]  w-[80%]  border-2 rounded-lg py-4 px-2  min-h-[550px] max-h-[600px] relative group transition hover:shadow-xl' >
              <div className='flex flex-col  gap-3 border-b border-slate-400 dark:border-slate-100 pb-4 mb-2'>
                <button onClick={() => favoritesToggle(favorite)} className='absolute top-6  right-0 group-hover:right-5  p-2 flex flex-col items-center justify-center
gap-y-2 opacity-0 group-hover:opacity-100 transition-all  rounded-full bg-sky-400'><AiFillHeart color="red" size={28} /></button>

                <div className='px-5'>
                  <img alt='_' className='w-[100%] h-[250px] rounded-xl' src={favorite.images[0]} />

                </div>
                <h3 className='ps-5 text-2xl font-bold'>{favorite.title} </h3>
              </div>

              <p className='text-lg'>{favorite.description}</p>
              <div className='mt-auto' >
                <div className='flex items-center justify-between px-4 pb-2'>
                  <div className='text-sky-500 text-2xl font-medium italic'>{favorite.price} $</div>
                  <button
                    onClick={() => addToCart(favorite)}
                    className='flex items-center gap-3 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all dark:text-black border-2 
                  dark:border-slate-300 dark:bg-slate-800 dark:text-slate-300  border-slate-900 rounded-xl 
                  bg-gray-100 py-2 px-3 font-medium'>
                    <span className='relative'><BsCart size={28} />
                      <span className='absolute bottom-7 right-8 bg-sky-500 px-2 rounded-full'>
                        {cart.find((item) => item.id === favorite.id) ? cart.find((item) => item.id === favorite.id).amount : ""}
                      </span>
                    </span>
                    <span>
                      Add To Basket
                    </span>
                  </button>
                </div>
                <Link to={`/product/${favorite.id}`} className='hover:border-b-2 pb-1 border-sky-500 text-sky-500 font-medium'>Click to see details..</Link>
              </div>
            </div>
          ))}
        </div > :
        <div className='px-2 text-lg lg:text-3xl  gap-5  flex-col text-3xl flex items-center justify-center dark:bg-slate-300 font-medium text-slate-900 min-h-[82vh]'> You haven't added any products to your favorites yet! <span>To add something <Link className='hover:bg-sky-500 dark:hover:bg-slate-700 dark:bg-slate-800 bg-sky-400 text-white px-3 py-2 rounded-xl ms-3' to="/">Click Here</Link></span>  </div>
      }

    </>
  )
}

export default Favorites;