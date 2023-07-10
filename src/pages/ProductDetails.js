import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState(null)

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.log('an error was occured');
      }
    };

    fetchSingleProduct();

  },[id])


  
  return (
    <div>
    {product ?  <div>
      <h2 className="text-3xl">{product.title}</h2>
      <img src={product.images[1]}/>
    </div> 
    : ""}
    
    
    </div>
   
  )
}

export default ProductDetails