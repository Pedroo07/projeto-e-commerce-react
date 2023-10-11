import './Products.css'
import React, { useState, useEffect, useContext } from 'react'
import fetchProducts from '../api/fetchProducts'
import ProductCard from './ProductCard'
import AppContext from '../context/AppContext'
function Products() {
  const { products, setProducts } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('tec').then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <section className='products container'>
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>
  )
}
export default Products
