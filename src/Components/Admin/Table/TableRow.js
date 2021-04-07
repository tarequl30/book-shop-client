import React from 'react';
import deleteBtn from '../../../icons/delete.png';
const TableRow = ({book}) => {
    const handleDelete = (id) => {
        fetch("http://localhost:5000/deleteBook/"+id,  {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }
    return (
       
             <tr>
                <td>{book.name}</td>
                <td>{book.authorName}</td>
                <td>{book.price}</td>
                <td><button onClick={() => handleDelete(book._id)} > <img src={deleteBtn} width="20px" alt=""/></button></td>
            </tr>
        
    );
};

export default TableRow;