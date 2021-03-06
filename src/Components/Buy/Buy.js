
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Buy.css'
import "bootstrap/dist/css/bootstrap.min.css"

const Buy = ({book}) => {
  const handleOrder = (bookName, price) => {
    const order = {
      bookName,
      price
    }
    console.table(order)
    fetch("http://localhost:5000/takeOrder/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result => console.log(result))
  }
  
    return (
      <Card>
            <Card.Img variant="top" src={book.imageUrl} />
            <Card.Body className="d-flex flex-column p-2">
                <div className="mt-auto">
                    <Card.Title className="m-0">{book.bookName}</Card.Title>
                    <small>{book.authorName}</small>
                    <div className="d-flex justify-content-between">
                        <Link to="/orders">
                            <button
                                onClick={() => handleOrder(book.name, book.price)}
                                className="d-block mt-3 btn buy-now-button"
                            >
                                Buy Now
                            </button>
                        </Link>
                        <button className="d-block mt-3 price">${book.price}</button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Buy;