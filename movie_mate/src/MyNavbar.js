import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/moviemate.webp"


function MyNavbar() {
   return (
       <Navbar bg="dark" variant="dark" expand="lg">
           <Navbar.Brand href="#">
               <img
                   src={logo}
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="Logo"
               />
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                   <LinkContainer to="/">
                       <Nav.Link>Home</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to="/about">
                       <Nav.Link>About</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to="/chatbot">
                       <Nav.Link>Chat Bot</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to="/favorites">
                       <Nav.Link>Starred</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to="/settings">
                       <Nav.Link>Settings</Nav.Link>
                   </LinkContainer>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
   );
}


export default MyNavbar;



