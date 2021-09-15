import React from 'react';
import './products.css'


const Product = (props) => {
    return (
        
        <div className="product">
            <img src={props.url} alt="product" />
            <div className="product__details">
                <div className="product__description">{props.description}</div>
            <div className="product__price">{props.price}</div>
            </div>
        </div>
    );
}

export default Product;
