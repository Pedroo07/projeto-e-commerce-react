import React, { useContext } from 'react'
import propTypes from 'prop-types'
import {BsCartDashFill} from 'react-icons/bs'
import './CartIten.css'
import AppContext from '../context/AppContext'
export default function CartIten({data}) {
  
  const {cartItens,setCartItens} = useContext(AppContext)
  const {id,thumbnail,title, price} = data
const RemoveItens = () => {
  const uptadeItens = cartItens.filter((item) => item.id != id)
  setCartItens(uptadeItens)
}


  return (
    <section className='cart-item'>
        <img src={thumbnail} alt="imagen do produto" className='cart-img' />

        <div className='cart-content'>
            <h3 className='cart-title'> {title} </h3>
            <h3 className="cart-price"> {price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })} </h3>
             <button className='button-remove' onClick={RemoveItens}><BsCartDashFill/></button>
        </div>
    </section>
  )
}
CartIten.propTypes = {
  data: propTypes.object
}.isRequired

