import React from 'react';
import SearchBar from './SearchBar';
import './Header.css'
import {CartButton }from './CartButton';

export function Header() {
return (
    <header className='header'>
        <div className="container">
           <SearchBar/>
           <CartButton/>
        </div>

    </header>
)
}