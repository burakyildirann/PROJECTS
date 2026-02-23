import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ProductDetail() {
  const {id} = useParams();

  const {products,loading} = useSelector((state)=>state.product);

  const product = products.find(product=>product.id ===Number(id));
   const {image, title, description,price} = product;
  if(loading){
    return <h2>Loding...</h2>
  }

  if(!product){
    return <h2>Product Not Found</h2>
  }

  return (
    <div>
      <img src={image} width={"200"}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{price}₺</h3>
      <div>
        <button>sepete ekle</button>
      </div>
    </div>
  )
}

export default ProductDetail;