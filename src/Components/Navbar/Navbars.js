import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import '../Navbar/Navbar.css'

const Navbars = () => {
    return (
        <Navbar className="navigation" collapseOnSelect expand="lg" bg="success" variant="dark">
            <Link to="/">
                <LinkContainer to="/">
                <Navbar.Brand>HeroSHOP</Navbar.Brand></LinkContainer>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/orders">
                        <Nav.Link className="ordinary-button">Orders</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/admin">
                        <Nav.Link className="ordinary-button">Admin</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/deals">
                        <Nav.Link className="ordinary-button">Deals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link className="login-button">Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;