import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getOrder')
    .then(res => res.json())
    .then(data => setOrder(data))
    }, [order])
    return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {order.map(singleOrder => <SingleOrder order={singleOrder} />)}
       </tbody>
    </Table>
 
    );
};

export default Orders;