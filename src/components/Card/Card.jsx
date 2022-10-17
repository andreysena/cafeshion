import React from 'react';
import './Card.css';

import cafe from '../../assets/images/cafe.png';
import camisa from '../../assets/images/camisa.png';

function Card({tipo}) {
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src={tipo === 'c' ? cafe : camisa } />       
            </div>
            <div className='card-info'>
                <span className='product-name'>Nome do produto</span>
                <span className='product-price'>R$00,00</span>
            </div>
        </div>
    );
}

export default Card;