
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, Dropdown,FormControl,Button,Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTachometerAlt,faGlobe,faSearch } from '@fortawesome/free-solid-svg-icons';
import './AdminNavbarLinks.css'
import {NavLink} from 'react-router-dom';

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
      <>
       {/* <Nav className="mr-auto" style={{display:'flex',flexDirection:'column',fontSize:'10',fontWeight:'bold'}}> */}
      {/* <ul className="nav" > */}
          <div style={{margin:'5px 15px'}}>
               <li > <NavLink className="nav-link" to="/" >Home</NavLink></li>
               <li ><NavLink className="nav-link" to="/productsGrid">Products</NavLink></li>
             
               <hr style={{borderColor:'white',width:'14.3rem'}}/>  </div>
                {/* <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
             
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
        {/* </Nav> */}
      </>
    );
  }
}

export default AdminNavbarLinks;
