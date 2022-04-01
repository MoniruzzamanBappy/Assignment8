import React from 'react';
import './Car.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
const Car = (props) => {
    const {name, img, price} = props.car;
    return (
        <div className='car-item'>
            <div className='car-img-container'>
            <img className='img-car' src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=>props.handleCartClick(props.car)} className='btn-cart'>Add to cart <BsFillCartPlusFill /></button>
        </div>
    );
};

export default Car;