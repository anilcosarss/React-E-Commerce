import React from 'react'
import { BsFillMoonFill,BsFillBasket3Fill,BsFillPhoneFill} from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='flex justify-center py-8 bg-gray-200 sticky z-20 top-0'>
            <div className='flex justify-between max-w-[1440px] w-[100%]'>
            <Link to="/"><div className='text-4xl flex items-center'><MdShoppingCart size={38} color='#2AC5FF'/> <span className='font-bold'>Logo</span></div></Link>
                <div className='flex justify-center items-center gap-5 text-2xl'>
                    <div className='flex items-center border-2 border-slate-900  rounded-xl bg-gray-100 gap-1 py-2 px-3'><BsFillMoonFill size={28}  /><span className='font-medium'>Dark Mode</span></div>
                    <Link to="/favorites"><div className='flex items-center relative border-2 border-slate-900  rounded-xl bg-gray-100 gap-1  py-2 px-3'><AiFillHeart size={28}  /><span className='absolute text-sm py-1 px-2 font-medium bg-sky-400 rounded-xl top-[-10px] left-[-10px]'>0</span><span className='font-medium'>Favorites</span></div></Link>
                    <Link to="/basket"><div className='flex items-center relative border-2 border-slate-900 rounded-xl text-slate-800 bg-gray-100 py-2 px-3 gap-1'><BsFillBasket3Fill size={28} /> <span className='absolute text-sm py-1 px-2 font-medium bg-sky-400 rounded-xl top-[-10px] left-[-10px]'>0</span> <span className='font-medium'>Basket</span></div></Link>

                </div>
            </div>
        </header>

    )
}

export default Header