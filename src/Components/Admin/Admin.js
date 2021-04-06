import React from 'react';
import { useState } from 'react';
import './Admin.css'
import Form from './Form/Form';
import Tables from './Table/Tables';

const Admin = () => {
    const [showForm, setShowForm] = useState(true);
    return (
        <section className="adminSection">
            <div className="sideNav">
                <h2>Hero SHOP</h2>
                <nav>
                    <p>Manage Books</p>
                    <button onClick={()=> setShowForm(true)}> Add Book</button>
                    <button onClick={()=> setShowForm(false)}> Edit book </button>
                </nav>
            </div>
            {
                showForm ? <Form></Form> : <Tables />
            }
        </section>
    );
};

export default Admin;