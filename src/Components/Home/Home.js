import React, { useEffect, useState } from 'react';
import './Home.css'
import Buy from '../Buy/Buy';


const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="allCover">
           {
              books.map(books => <Buy book={books}></Buy>)
           }
        </div>
    );
};

export default Home;