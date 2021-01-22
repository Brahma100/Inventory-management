
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, Dropdown,FormControl,Button,Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTachometerAlt,faGlobe,faSearch } from '@fortawesome/free-solid-svg-icons';
import './AdminNavbarLinks.css'

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        {/* <i className="fa fa-globe" /> */}
        <FontAwesomeIcon icon={faGlobe} className="font-size-lg icon1 " />
        <b className="caret" />
        {/* <span className="notification">5</span> */}
        {/* <p className="hidden-lg hidden-md">Notification</p> */}
      </div>
    );
    return (
      <Nav className="mr-auto">
      <ul className="nav" style={{display:'inline-flex'}}>
          
               <li> <Nav.Link className='nav-link' href="/">Home</Nav.Link></li>
                <li><Nav.Link className='nav-link' href="#link">Link</Nav.Link></li>
                <li><NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown></li>
             
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
      </ul> </Nav>
    );
  }
}

export default AdminNavbarLinks;
