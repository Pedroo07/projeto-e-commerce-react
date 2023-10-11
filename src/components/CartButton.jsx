import React, { useContext } from 'react'
import {BsCart} from 'react-icons/bs'
import './CartButton.css'
import AppContext from '../context/AppContext'

export function CartButton() {
  const {cartItens, cartVisible, setCartVisible} = useContext(AppContext)
  return (
    <button className='cart_button' onClick={() => setCartVisible(!cartVisible)}>
        <BsCart/>
        {cartItens.length > 0 &&  <span className='cart-status'>{cartItens.length}</span>}
    </button>
  )
}
