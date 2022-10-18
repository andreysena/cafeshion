import React from 'react';
import './Card.css';

import cafe from '../../assets/images/cafe.png';
import camisa from '../../assets/images/camisa.png';

function Card({srcImg, name, price}) {
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src={require(`../../assets/images/${srcImg}`)} />       
            </div>
            <div className='card-info'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>R${price}</span>
            </div>
        </div>
    );
}

export default Card;