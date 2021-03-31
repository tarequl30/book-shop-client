import React from 'react';
import image from '../../icons/darkcover.jpg'
import './Home.css'
import Buy from '../Buy/Buy';


const Home = () => {
    
    const books = [
    {
        name: "Dark Cover",
        image: image,
        author: 'jhon smith',
        price: 200
    },
    {
        name: "Dark Cover",
        image: image,
        author: 'jhon smith',
        price: 200
    },
    {
        name: "Dark Cover",
        image: image,
        author: 'jhon smith',
        price: 200
    },
    {
        name: "Dark Cover",
        image: image,
        author: 'jhon smith',
        price: 200
    }
]
    return (
        <div className="allCover">
           {
               books.map(books => <Buy book={books}></Buy>)
           }
        </div>
    );
};

export default Home;