import React, { useContext } from 'react'
import './ProductCard.css'
import propTypes from 'prop-types'
import { BsCartPlusFill } from 'react-icons/bs'
import AppContext from '../context/AppContext'
export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data
  const { cartItens, setCartItens } = useContext(AppContext)
  const AddItem = () => setCartItens([...cartItens, data])  
  return (
    <section className='product-card'>

      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className='card-img' />
      <div className='card-info'>
        <h2 className='card-price'>{price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })}</h2>
        <h2 className='card-title'>{title}</h2>
      </div>
      <button className='button-add' onClick={AddItem}><BsCartPlusFill /></button>
    </section>
  )
}
ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired