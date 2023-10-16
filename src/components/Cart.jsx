import React, { useContext } from 'react'
import './Cart.css'
import CartIten from './CartIten'
import AppContext from '../context/AppContext'
export default function Cart() {
  const { cartItens,setCartItens, cartVisible } = useContext(AppContext)
  const totalPrice = cartItens.reduce((acc,item) => item.price + acc, 0)
  const refresh = () => {
    const updateItens = cartItens.splice(0, cartItens.length.id)
    setCartItens(updateItens)
  }
  return (
    <section className={`cart ${cartVisible ? 'ativo' : ''}`}>
      <div className='cart-itens'>
        {cartItens.map((cartIten) => <CartIten key={cartIten.id} data={cartIten} />)}
      </div>
      <div className='cart-resume'>{totalPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })} <button className='button-final' onClick={refresh}>Finalizar Compra</button></div>
    </section>
  )
}
