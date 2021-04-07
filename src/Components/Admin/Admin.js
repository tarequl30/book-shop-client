import React from 'react';
import { useState } from 'react';
import './Admin.css'
import Form from './Form/Form';
import Tables from './Table/Tables';
import plusImage from '../../icons/plus1.png'
import editImage from '../../icons/edit1.png'
const Admin = () => {
    const [showForm, setShowForm] = useState(true);
    return (
        <section className="adminSection">
            <div className="sideNav">
                <h2>Hero SHOP</h2>
                <nav>
                    <p>Manage Books</p>
                    <button className="buy-now-button" onClick={()=> setShowForm(true)}> <img src={plusImage} alt="" width="20px"/> Add Book</button>
                    <button className="buy-now-button" onClick={()=> setShowForm(false)}> <img src={editImage} alt="" width="20px"/>  Edit book </button>
                </nav>
            </div>
            {
                showForm ? <Form></Form> : <Tables />
            }
        </section>
    );
};

export default Admin;