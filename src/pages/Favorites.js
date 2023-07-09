import React, { useContext } from 'react'
import { FavoritesContext } from '../contexts/FavoritesContext'
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favoritesToggle, favorites } = useContext(FavoritesContext);



  return (

    <div className='flex py-16 flex-wrap justify-center items-center gap-x-5 gap-y-8' >
      {favorites.map((favorite) => (
        <div className='dark:bg-slate-800 bg-gray-200 dark:text-slate-300 flex flex-col xl:w-[23%] lg:w-[31%] md:w-[48%]  w-[80%]  border-2 rounded-lg py-4 px-2 h-[530px] relative group transition hover:shadow-xl' >
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
            <div className='flex items-center gap-5 pb-2'>
              <div className='text-sky-500 text-2xl font-medium italic'>{favorite.price} $</div>
              <button className='dark:text-black border-2 border-slate-900 rounded-xl bg-gray-100 py-2 px-3 font-medium'>Add To Basket</button>
            </div>
            <Link to={`/product/${favorite.id}`} className='text-sky-500 font-medium'>Click to see details..</Link>
          </div>
        </div>
      ))}




    </div >
  )
}

export default Favorites