import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {getAllProducts} from '../redux/productSlice/';
import ProductList from '../components/ProductList';


function Products() {

  const dispatch = useDispatch();

  const {products} = useSelector(state=> state.product)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])
  
  return (

    <div>
      <ProductList products={products}/>
    </div>
  )
}

export default Products