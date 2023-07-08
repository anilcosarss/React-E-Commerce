import React, { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [products,setProducts]= useState([]);

    // Fetch datas
 
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
          } catch (error) {
            console.log('an error error was occured');
          }
        };
      
        fetchProducts();
      }, []);
 
    return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
};

export default ProductsProvider;
