import React from 'react'
import ProductCard from '../components/ProductCard';
import '../css/ProductList.css';
function ProductList({products}) {

  return (
    <div className='product-list'>
      {
        products && products.map(product=>(
          <div key={product.id}>
            <ProductCard product={product}/>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList