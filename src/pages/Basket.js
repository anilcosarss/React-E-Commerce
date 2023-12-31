import React, { useContext } from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext'
import Modal from '../components/Modal/Modal';
import { Link } from 'react-router-dom';


const Basket = () => {
  const { cart, addToCart, clearBasket, removeItem, decreaseAmount, totalPrice } = useContext(CartContext);
  return (
    <>

      <div className='py-16 px-8 '>{cart.length !== 0 ?
        <div className='flex xl:flex-row gap-5 flex-col justify-evenly '>

          <div className='flex flex-col gap-8'>
            <Modal />
            {
              cart.map((item) => (
                <div key={item.id}>
                  <div className='dark:bg-slate-800  rounded-xl bg-gray-200 dark:text-slate-300 flex flex-col lg:flex-row border border-4 items-center lg:px-8 lg:h-[320px]'>
                    <div className='p-4'>
                      <img alt='_' className='rounded-xl w-[250px] h-[250px] ' src={item.images[0]} />

                    </div>
                    <div className='ps-8'>
                      <h3 className='text-3xl font-bold mb-4'>{item.title}</h3>
                      <p className='max-w-[350px] text-lg mb-4'>{item.description}</p>
                      <div className='flex gap-4 items-center'>
                        <div className='text-xl font-medium'>Quantity: {item.amount}</div>
                        <div className='flex'>
                          <button className='dark:hover:bg-slate-100 dark:hover:text-slate-800 transition-all hover:bg-slate-800 hover:text-slate-100' onClick={() => decreaseAmount(item)} ><AiOutlineMinusSquare size={40} /></button>
                          <button className='dark:hover:bg-slate-100 dark:hover:text-slate-800 hover:bg-slate-300 transition-all hover:bg-slate-800 hover:text-slate-100' onClick={() => addToCart(item)}><AiOutlinePlusSquare size={40} /></button>
                          <button className='dark:hover:bg-slate-100 dark:hover:text-slate-800 hover:bg-slate-300 transition-all hover:bg-slate-800 hover:text-slate-100' onClick={() => removeItem(item)}><BsTrash size={34} /></button>
                        </div>
                      </div>
                    </div>
                    <div className='lg:mt-0 mt-5 lg:self-end pb-8 text-xl text-sky-700 dark:text-sky-400'>Total amount = {(item.price * item.amount).toLocaleString("en-US")} $ </div>
                  </div>


                </div>
              ))
            }

            <button onClick={() => clearBasket()} className='px-5 py-2 border-2 dark:bg-slate-800 dark:text-slate-100  dark:hover:text-slate-100 hover:bg-slate-300 hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-700 hover:bg-slate-300 transition-all dark:border-slate-100 border-slate-800 rounded-xl text-xl font-medium mb-5' >Clear Basket</button>

          </div>
          <div className='flex dark:bg-slate-800 bg-gray-200 dark:text-slate-300 py-5 px-3 rounded-xl flex-col justify-between border border-4 max-h-[250px]  xl:w-[350px]'>
            <div>
              <h3 className='text-2xl font-bold underline pb-4'>Order Summary</h3>
              <h2 className='text-xl font-medium'>Subtotal {cart.length} {cart.length > 1 ? "items" : "item"} : {(totalPrice).toLocaleString("en-US")}$  </h2>
            </div>
            <div className="self-center">
              <button className='px-5 py-2 border-2 dark:hover:bg-slate-100 dark:hover:text-slate-800 hover:bg-slate-300 transition-all hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-700 hover:bg-slate-300 transition-all dark:border-slate-100 border-slate-800 rounded-xl text-xl font-medium' >Proceed to checkout</button>
            </div>
          </div>

        </div>
        : <div className='text-xl lg:text-3xl lg:flex-row lg:gap-0 flex-col flex gap-5  items-center justify-center dark:bg-slate-300 font-medium text-slate-900 min-h-[63vh]'> Your basket is empty! To add something <Link className='hover:bg-sky-500 dark:hover:bg-slate-700 dark:bg-slate-800 bg-sky-400 text-white px-3 py-2 rounded-xl ms-3' to="/">Click Here</Link> </div>
      }



      </div>
    </>
  )

}

export default Basket;