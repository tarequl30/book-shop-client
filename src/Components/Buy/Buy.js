import React from 'react';
import './Buy.css'

const Buy = (props) => {
    const {name, image, author, price} = props.book
    return (
        <div className="bookStyle">
            <img src={image} alt="" width="70%"/>
                <h5>{name}</h5>
                <p><small>{author}</small></p>
            <div className="button">
                <h5>${price}</h5> <button>Buy Now</button>
            </div>
        </div>
        
    );
};

export default Buy;