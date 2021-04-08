import React from 'react';
import deleteBtn from '../../icons/delete.png';

const SingleOrder = ({order}) => {
    const handleDelete = (id) => {
        fetch("http://localhost:5000/deleteOrderBook/"+id,  {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }
    return (
        <tr>
            <td>{order.bookName}</td>
            <td>1</td>
            <td>{order.price}</td>
            <td><button onClick={() => handleDelete(order._id)} > <img src={deleteBtn} width="20px" alt=""/></button></td>
            </tr>
            
    );
};

export default SingleOrder;