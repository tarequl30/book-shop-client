
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';

const Tables = ({book}) => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <Table striped bordered hover>
            <thead>
                <tr> 
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                   books.map(books => <TableRow book={books}> </TableRow>)
               }
            </tbody>
       </Table>
    );
};

export default Tables;