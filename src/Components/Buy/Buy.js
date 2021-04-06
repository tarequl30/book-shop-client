
import React from 'react';
import { Card } from 'react-bootstrap';
import './Buy.css'

const Buy = ({book}) => {
    return (
        // <div className="bookStyle">
        //         <img src={book.imageUrl} alt="" width="70%"/>
        //         <h5>{book.bookName}</h5>
        //         <p><small>{book.authorName}</small></p>
        //     <div className="button">
        //         <h5>${book.price}</h5> <button>Buy Now</button>
        //     </div>
        // </div>
        <Card>
        <Card.Img variant="top" src={book.imageUrl} alt="" />
        <Card.Body>
          <Card.Title>{book.bookName}</Card.Title>
          <Card.Text>
          <p><small>{book.authorName}</small></p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">${book.price} <button>Buy Now</button></small>
        </Card.Footer>
      </Card>
    //    <Card>
    //    <Card.Img variant="top" src="holder.js/100px160" />
    //    <Card.Body>
    //      <Card.Title>Card title</Card.Title>
    //      <Card.Text>
    //        This is a wider card with supporting text below as a natural lead-in to
    //        additional content. This content is a little bit longer.
    //      </Card.Text>
    //    </Card.Body>
    //    <Card.Footer>
    //      <small className="text-muted">Last updated 3 mins ago</small>
    //    </Card.Footer>
    //  </Card>
    );
};

export default Buy;