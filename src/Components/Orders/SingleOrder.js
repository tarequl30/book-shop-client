import React from 'react';

const SingleOrder = ({order}) => {
    return (
        <tr>
            <td>{order.bookName}</td>
            <td>1</td>
            <td>{order.price}</td>
            </tr>
    );
};

export default SingleOrder;