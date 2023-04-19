import React from "react";
import { Container, Navbar ,Nav, Button} from "react-bootstrap";
let Navigationbar=()=>{
    return(
        <div>
      <Navbar variant='dark'bg="dark" expand="sm">
        <Container>
           <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
           <Nav className="me-auto my-2 my-lg-0">
           <Nav.Link href="#">Home</Nav.Link>
           <Nav.Link href="#">pricing</Nav.Link>
           <Nav.Link href="#">ABout</Nav.Link>
            </Nav>
            <Nav>
                <Button  variant="secondary">cart<span>1</span></Button>
            </Nav>
           
        </Container>
            </Navbar>
            </div>
    
    )
}
export default Navigationbar