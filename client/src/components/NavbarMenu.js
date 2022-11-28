import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

export default function NavbarMenu() {
  return (
    <>
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Nav>
        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/gamedata">Game Data</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/blog">Blog</NavLink></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}
