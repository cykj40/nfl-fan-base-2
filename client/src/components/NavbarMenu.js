import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink , Routes , Route } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import SearchWeek from '../assets/LiveData';

import Auth from '../utils/auth'


export default function NavbarMenu() {

  const [showExtraNav, setShowExtraNav] = useState(false);

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className='text-white gfont'>
            NFL-Fan-Base
          </Navbar.Brand>
          <Nav>
            <Nav.Link><NavLink to="/" className="navLink">Home</NavLink></Nav.Link>
            {Auth.loggedIn() ? (
              <>
                <Nav.Link>
                  <NavLink to="/gamedata" className="navLink">
                  Game Data
                  </NavLink>
                </Nav.Link>
                <Nav.Link to='/blog'>
                  <NavLink className="navLink">Blog</NavLink>
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}><NavLink className="navLink">Logout</NavLink></Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => setShowExtraNav(true)}><NavLink className="navLink">Login/Sign Up</NavLink></Nav.Link>
            )}
            <Modal
              size='lg'
              show={showExtraNav}
              onHide={() => setShowExtraNav(false)}
              aria-labelledby='signup-modal'>

                
              <Tab.Container defaultActiveKey='login'>
                <Modal.Header closeButton>
                  <Modal.Title id='signup-modal'>
                    <Nav variant='pills'>
                      <Nav.Item>
                        <Nav.Link eventKey='login'>Login</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey='login'>
                      <LoginComponent handleModalClose={() => setShowExtraNav(false)} />
                    </Tab.Pane>
                    <Tab.Pane eventKey='signup'>
                      <SignUpComponent handleModalClose={() => setShowExtraNav(false)} />
                    </Tab.Pane>
                  </Tab.Content>
                </Modal.Body>
              </Tab.Container>
            </Modal>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
