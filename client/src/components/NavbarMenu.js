import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import LoginComponent from './LoginComponent';

import Auth from '../utils/auth'


export default function NavbarMenu() {

  const [showExtraNav, setShowExtraNav] = useState(false);

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            NFL-Fan-Base
          </Navbar.Brand>
          <Nav>
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            {Auth.loggedIn() ? (
              <>
                <Nav.Link to='/gamedata'>
                  Game Data
                </Nav.Link>
                <Nav.Link to='/blog'>
                  Blog
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => setShowExtraNav(true)}>Login/Sign Up</Nav.Link>
            )}
            <Modal
              size='lg'
              show={showExtraNav}
              onHide={() => setShowExtraNav(false)}
              aria-labelledby='signup-modal'>
              {/* tab container to do either signup or login component */}
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
                      <LoginComponent handleModalClose={() => setShowExtraNav(false)} />
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





// {/* <Navbar bg="dark">
//       <Container>
//         <Navbar.Brand>
//           NFL-Fan-Base
//         </Navbar.Brand>
//         <Nav>
//         <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
//         {/* <Nav.Link><NavLink to="/login">Login/Sign Up</NavLink></Nav.Link> */}
//         {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link to='/gamedata'>
//                     Game Data
//                   </Nav.Link>
//                   <Nav.Link to='/blog'>
//                     Blog
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowExtraNav(true)}>Login/Sign Up</Nav.Link>
/* <Nav.Link><NavLink to="/gamedata">Game Data</NavLink></Nav.Link>
<Nav.Link><NavLink to="/blog">Blog</NavLink></Nav.Link> */