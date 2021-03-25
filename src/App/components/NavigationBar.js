import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'

 const NavigationBar = (props)=>{
    return(
       <Navbar bg="dark" expand="lg">
            <Nav>
            <Nav.Link href="/shop">Menü</Nav.Link>
             <Nav.Link href="/cart">Warenkorb</Nav.Link>
            </Nav>

       </Navbar>
    )
}

export default NavigationBar;