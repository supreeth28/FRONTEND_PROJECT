import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
const Header = () => {
    
    return(


<header>      
<Navbar className='navbar-style' expand="lg">
    <Container>
    <Navbar.Brand href="#">
    <Image className='logo-img-style' src= 'images/logo.jpg' alt="NJTECH" roundedCircle/>
    <h6 className='logo-text-style'>NJTech INC</h6>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto">

      <Nav.Link href="#">HOME</Nav.Link>
      
      <Nav.Link href="#link">ABOUT US</Nav.Link>
      
      < NavDropdown title="Services" id="basic-nav-dropdown">
        < NavDropdown.Item href="#">APPLICATION DEVELOPMENT</ NavDropdown.Item>
        <NavDropdown.Item href="#">IT STAFFING</NavDropdown.Item>
        <NavDropdown.Item href="#">BUSINESS PROCESS OUTSOURCING(BPO)</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#link">INDUSTRY</Nav.Link>

      <Nav.Link href="#link">PARTNER AND ALLIANCES</Nav.Link>

      <Nav.Link href="#link">CURRENT OPENINGS</Nav.Link>

      <Nav.Link href="#link">CAREERS</Nav.Link>

      <Nav.Link href="#link">CONTACT US</Nav.Link>





    </Nav>

     </Navbar.Collapse>
    </Container>

    </Navbar>

  </header>

    )



}

export default Header