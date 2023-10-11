import React, { useState } from 'react'
import propTypes from 'prop-types'
import  AppContext  from './AppContext'

export default function Provider({ children }) {
    const [products, setProducts] = useState([])
    const [cartItens, setCartItens] = useState([])
    const [cartVisible, setCartVisible] = useState(false)
    const value = {
        products, 
        setProducts,
        cartItens,
        setCartItens,
        cartVisible, 
        setCartVisible
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
Provider.propTypes = {
    children: propTypes.any
}.isRequired