import React from 'react';
import './Buy.css'

const Buy = ({props}) => {
    // const {name, image, author, price} = props.book
    return (
        <div className="bookStyle">
            <img src={props.imageUrl} alt="" width="70%"/>
                <h5>{props.bookName}</h5>
                <p><small>{props.authorName}</small></p>
            <div className="button">
                <h5>${props.price}</h5> <button>Buy Now</button>
            </div>
        </div>
        
    );
};

export default Buy;