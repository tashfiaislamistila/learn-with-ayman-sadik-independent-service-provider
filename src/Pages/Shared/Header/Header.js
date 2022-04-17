import React from 'react';
import { Link } from "react-router-dom";
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../../image/logo.png'
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                <Container>
                    <img src={logo} height='30px' alt="" srcset="" />
                    <Navbar.Brand as={Link} to="/">
                        Tutor Ayman Sadik</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.CustomLink to="#features">Features</Nav.CustomLink>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;