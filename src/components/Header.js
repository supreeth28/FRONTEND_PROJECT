import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    
    return(


<header>      
<Navbar className='navbar-style' expand="lg">
    <Container>

      <LinkContainer to ='/'>

      <Navbar.Brand href="/">
    <Image className='logo-img-style' src= 'images/logo.jpg' alt="NJTECH" roundedCircle/>
    <h6 className='logo-text-style'>NJTech INC</h6>
    </Navbar.Brand>
      </LinkContainer>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto">


       <LinkContainer to ='/'>

      <Nav.Link href="#">HOME</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to ='/about'>
      <Nav.Link href="#link">ABOUT US</Nav.Link>
      </LinkContainer>
      
      < NavDropdown title="Services" id="basic-nav-dropdown">
      <LinkContainer to ='/Application'>
        < NavDropdown.Item href="#link">APPLICATION DEVELOPMENT</ NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to ='/It'>
        <NavDropdown.Item href="#link">IT STAFFING</NavDropdown.Item>
    </LinkContainer>


    <LinkContainer to ='/Business'>
        <NavDropdown.Item href="#link">BUSINESS PROCESS OUTSOURCING(BPO)</NavDropdown.Item>
        </LinkContainer>


      </NavDropdown>

      <LinkContainer to ='/Industry'>
      <Nav.Link href="#link">INDUSTRY</Nav.Link>
      </LinkContainer>


        <LinkContainer to ='/Partner'>
      <Nav.Link href="#link">PARTNER AND ALLIANCES</Nav.Link>
      </LinkContainer>

        
      <LinkContainer to ='/Current'>
      <Nav.Link href="#link">CURRENT OPENINGS</Nav.Link>
      </LinkContainer>

      <LinkContainer to ='/Careers'>
      <Nav.Link href="#link">CAREERS</Nav.Link>
      </LinkContainer>

      <LinkContainer to ='/Contact'>
      <Nav.Link href="#link">CONTACT US</Nav.Link>
      </LinkContainer>

      <LinkContainer to ='/Login'>
      <Nav.Link href="#link">LOGIN</Nav.Link>
      </LinkContainer>

      <LinkContainer to ='/Employee'>
      <Nav.Link href="#link">EMPLOYEE</Nav.Link>
      </LinkContainer>




    </Nav>

     </Navbar.Collapse>
    </Container>

    </Navbar>

  </header>

    )



}

export default Header