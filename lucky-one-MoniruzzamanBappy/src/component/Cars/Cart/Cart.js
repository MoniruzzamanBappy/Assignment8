import React from 'react';
import './Cart.css'

const Cart = (props) => {

    return (
        <div className='cart-container'>
            <div id='names'>
            
            
            <li>{props.cart.name}</li>
                
            
            </div>
        </div>
    );
};

export default Cart;