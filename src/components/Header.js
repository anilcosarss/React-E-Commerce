import React, { useContext,useState ,useEffect } from 'react'
import { BsFillMoonFill,BsFillBasket3Fill} from 'react-icons/bs';
import { AiFillHeart } from "react-icons/ai";
import { MdShoppingCart,MdSunny } from "react-icons/md";

import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { CartContext } from '../contexts/CartContext';


const Header = () => {
    const {themeToggle,theme} = useContext(ThemeContext)
    const {favorites} = useContext(FavoritesContext);
    const { cart } = useContext(CartContext);
    const [isActive,setIsActive] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
      });


    return (
        <header className= {`${isActive ? "py-3 opacity-90 shadow-xl" : "py-8"} transition-all dark:bg-slate-800 flex justify-center shadow-md bg-gray-300 sticky z-20 top-0`}>
            <div className='flex justify-between max-w-[1440px] w-[100%] px-5 lg:px-12'>
            <Link  to="/"><div className='text-4xl flex items-center dark:text-slate-200'><MdShoppingCart size={38} color='#2AC5FF'/><span className='font-bold'>Logo</span></div></Link>
                <div className='cursor-pointer flex justify-center items-center gap-5 text-2xl'>
                    <button onClick={themeToggle} className='flex items-center border-2 border-slate-900  rounded-xl bg-gray-100 gap-1 py-2 px-3'>{ theme ==="light" ?<BsFillMoonFill size={28} /> : <MdSunny size={28}/>  }<span className='font-medium hidden md:block'>{ theme ==="dark" ? "Light Mode" : "Dark Mode"}</span></button>
                    <Link to="/favorites"><div className='flex items-center relative border-2 border-slate-900  rounded-xl bg-gray-100 gap-1  py-2 px-3'><AiFillHeart size={28}  /><span className='absolute text-[20px] py-1 px-2 font-medium bg-sky-400 rounded-xl top-[-10px] left-[-15px]'>{favorites.length}</span><span className='font-medium hidden md:block'>Favorites</span></div></Link>
                    <Link to="/basket"><div className='flex items-center relative border-2 border-slate-900 rounded-xl text-slate-800 bg-gray-100 py-2 px-3 gap-1'><BsFillBasket3Fill size={28} /> <span className='absolute text-[20px] py-1 px-2 font-medium bg-sky-400 rounded-xl top-[-15px] left-[-10px]'>{cart.length}</span> <span className='font-medium hidden md:block'>Basket</span></div></Link>

                </div>
            </div>
        </header>

    )
}

export default Header