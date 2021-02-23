import React from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap'

const nav = (props) => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="#home" style={{margin:'auto'}} >Todo Application</Navbar.Brand>
            {/* <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav> */}
        </Navbar>
    );
}

export default nav;
