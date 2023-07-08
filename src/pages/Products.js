import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContex';
import Product from '../components/Product'

const Products = () => {
  const {products} = useContext(ProductsContext); 
  console.log(products)

  return (
    <div>
      <section className='products py-16 px-4'>
        <div className='flex flex-wrap justify-center items-center gap-x-5 gap-y-8'>
          {products.map((product)=> {
            return <Product product={product} key={product.id}/>;
          })}
        </div>
      </section>
    </div>
  )
}

export default Products