import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function ProductDetail() {

  const {id} = useParams();

  const {products, loading} = useSelector((state)=>state.product);

  const product = products.find(product=>product.id === Number(id));

  if(loading){
    return <h2>Loading...</h2>;
  }

  if(!product){
    return <h2>Product Not Found</h2>;
  }



  return (
    <div>
      <img src={product.image} width="200"/>
            <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>{product.price}₺</h3>
      <div>
        <button>sepete ekle</button>
      </div>
    </div>
  )
}

export default ProductDetail;