import React from 'react';
import { useState } from 'react';
import './Admin.css'
import Form from './Form/Form';
import Table from './Table/Table';
import AddIcon from '@material-ui/icons/Add';
import { Icon } from '@material-ui/core';

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
                showForm ? <Form></Form> : <Table />
            }
        </section>
    );
};

export default Admin;