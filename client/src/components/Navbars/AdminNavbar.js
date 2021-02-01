import React, { Component } from "react";
import { Navbar,Nav,Dropdown, NavLink } from "react-bootstrap";
import avatar from '../../assets/images/avatar.png'
import AdminNavbarLinks from "./AdminNavbarLinks";
import './AdminNavbar.css';
import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import Logout from "../auth/Logout";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faDatabase, faShoppingBag, faUserEdit } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    console.log("classlist1",document.documentElement.classList);

    document.documentElement.classList.toggle("nav-open");
    console.log("classlist2",document.documentElement.classList);
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      console.log("Body CLicked");
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
    console.log("Body:",document.body);
  }
  
  render() {
    const {isAuthenticated, user}=this.props.auth;
    const authLinks=(
      < >
      
          <Nav.Item>
              
          <Dropdown className="user-dropdown" style={{padding:'0rem !important'}} isOpen={this.state.dropdownOpen} toggle={this.toggled}>
              
              <Dropdown.Toggle id="dropdown-basic" caret>
              {user? <div className="user-avatar">
              <img className="avatar" style={{width:'2rem',borderRadius:'50%'}} src={avatar} />
              <div class="status-overlay">
                  <i class="bowtie-icon bowtie-status-success success"></i>
              </div>
              </div>:'X'}
              <div>
                  <span style={{color:'red',fontWeight:400,fontSize:'80%'}}>Shop Admin</span>
                  <div style={{color:'#3b3e66'}}>{user? user.fname+" "+user.lname:'Hello Guest'}</div>
              </div>
             
              
              </Dropdown.Toggle>
              <Dropdown.Menu bottom>
                      <Dropdown.Item header>
                      {user? <div className="user-avatar">
              <img className="avatar" style={{width:'2rem',borderRadius:'50%'}} src={avatar} />
              {/* <div class="status-overlay">
                  <i class="bowtie-icon bowtie-status-success success"></i>
              </div> */}
              </div>:'X'}
              <div>
                  <span style={{color:'red',fontWeight:400,fontSize:'80%'}}>Shop Admin</span>
                  <div style={{color:'#3b3e66'}}>{user? user.email:'Hello Guest'}</div>
              </div>
                      </Dropdown.Item><hr/>
                       <Dropdown.Item className="dropdown-list-nav"> <Nav.Item  >
                      <div className="dropdown-list-item">
                      <FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faCog}/><h7>Settings</h7>    
                      </div>    
              </Nav.Item></Dropdown.Item>
                       <Dropdown.Item className="dropdown-list-nav" href="/admin/user"> <Nav.Item >
                         
                      <div className="dropdown-list-item">
                      <FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faUserEdit}/><h7>Profile</h7>    
                      </div>     
              </Nav.Item></Dropdown.Item>
              <Dropdown.Item> <Nav.Item ><Logout/></Nav.Item></Dropdown.Item>
             
              </Dropdown.Menu>
             
          </Dropdown>

          </Nav.Item>    
      </>
  );
  const guestLinks=(
      < >
          <Nav.Item>
              <RegisterModal/>
          </Nav.Item>
          <Nav.Item>
              <LoginModal/>
          </Nav.Item>
      </ >
  );
  const icon=()=>{
    if(this.props.brandText==="User Profile"){
      return faUserEdit;
    }
    else if(this.props.brandText==="Dashboard"){
      return faDatabase;
    }
    else if(this.props.brandText==="Products"){
      return faShoppingBag;
    }
  }
    return (
      <Navbar bg="dark" expand="lg" className="navbar" >
          <Navbar.Brand>
            <div className="fontIcon-wrapper"><FontAwesomeIcon className="NavIcon-brand" icon={icon()}/></div>
            <a href="#">{this.props.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={this.mobileSidebarToggle} />
        <Navbar.Collapse>
          {/* <AdminNavbarLinks /> */}
          <NavLink className="ml-auto"  href='/'><b>Home</b></NavLink>
                        {/* <NavLink  href='/admin/dashboard'><b>Dashboard</b></NavLink> */}
                        <NavLink  href='/productsGrid'><b>Products</b></NavLink>
          <Nav  navbar>
                        {isAuthenticated?authLinks:guestLinks}    
                        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(mapStateToProps,null)(Header);
