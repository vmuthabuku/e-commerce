import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './header.css'


export default function Cart() {
    return (
        <div className="cart">
        <FontAwesomeIcon className="cartsize" size='1.5x' icon={faShoppingCart} />         
        </div>
    )
}
