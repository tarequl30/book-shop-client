import React from 'react';

const TableRow = ({book}) => {
    return (
        <div>
             {<tr>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.price}</td>
                <td><button>Delete</button></td>
                </tr>}
        </div>
    );
};

export default TableRow;