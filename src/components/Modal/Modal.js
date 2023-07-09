import React, { useContext } from 'react'
import { AiOutlineClose,AiOutlineHeart } from "react-icons/ai";
import { CartContext } from '../../contexts/CartContext';
import { BsTrash } from 'react-icons/bs';


const Modal = () => {
    const {closeModel,modal,removeModel,selectedProduct}= useContext(CartContext);

    return (
        <>
  
        {modal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="opacity-50 dark:opacity-80  dark:bg-black bg-slate-300 w-screen h-screen fixed top-0 left-0 bottom-0 right-0"></div>
            <div className="px-8 py-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-5 bg-gray-100 p-5 rounded-md max-w-[600px] min-w-[300px]">
              <h2 className='text-3xl font-bold mb-5'>Are you sure to delete this item ?</h2>
              <div className='flex gap-3 py-5 px-3 my-8 border border-2 border-slate-400 rounded-xl'>
                <img className='w-[200px] h-[150px]' src={selectedProduct && selectedProduct.images[0]}/>
                <div>
                  <h3 className='text-2xl font-medium'>{selectedProduct.title}</h3>
                <p className='text-lg '>
                {selectedProduct.description}
              </p>

                </div>
              
              </div>
              <div className='flex'>
              <button onClick={() => removeModel(selectedProduct)} className='flex items-center gap-2 dark:text-black border-2 border-slate-900 rounded-xl bg-gray-100 py-2 px-3 text-xl font-medium mr-5'> <BsTrash size={25}/> <span>Delete</span></button> 
              <button onClick={() => removeModel(selectedProduct)} className='flex items-center gap-2 dark:text-black border-2 border-slate-900 rounded-xl bg-gray-100 py-2 px-3 text-xl font-medium mr-5'> <AiOutlineHeart size={25}/> <span>Delete and add to favorites</span></button> 

              </div>
              
              <button className="absolute top-2 right-2" onClick={closeModel}>
               <AiOutlineClose size={40}/>
              </button>
            </div>
          </div>
        )}
      </>
    )
}

export default Modal;