import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from './Cart/Cart';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./cars.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])

    const handleCartClick = (car) =>{
        let newCart = [];
        const exist = cart.find(item=>item.id === car.id);
        if(!exist){
            newCart = [...cart, car]
        }
        else{
            const rest = cart.filter(item=>item.id !== car.id);
            newCart=[...rest, exist]
        }
        setCart(newCart);
    }

    const randomHandle=()=>{
        let randomItem = cart[Math.floor(Math.random()*cart.length)];
        // console.log(randomItem);
        const itemRandom = document.getElementById('random-item');
        itemRandom.textContent=''
        const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <h2>Selected One</h2>
            <li>${randomItem.name}</li>
        `;
            itemRandom.appendChild(div);
    }

    const removeAll = ()=>{
                const itemRandom = document.getElementById('random-item');
                itemRandom.textContent=''
                setCart([])
           }

    return (
        <div className='container'>
           <div className='car-container'>
           {
                cars.map(car=><Car key={car.id} car={car} handleCartClick={handleCartClick}></Car>)
            }
           </div>
           <div className='cart-container'>
               <h2>Selected Cars</h2>
           {
               cart.map(item=><Cart key={item.id} cart={item}></Cart>)
           }
           
           <button className='cart-btn' onClick={randomHandle}>Select One</button>
           <button className='cart-btn' onClick={removeAll}>Choose Again</button>
           <div id='random-item'>
            </div>
           </div>
        </div>
    );
};

export default Cars;