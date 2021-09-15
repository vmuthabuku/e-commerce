import React from 'react';

const Product = (props) => {
    return (
        <div>
            <img src={props.url} alt="product" />
            <div>{props.description}</div>
            <div>{props.price}</div>
        </div>
    );
}

export default Product;
