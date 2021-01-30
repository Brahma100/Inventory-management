import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col} from "react-bootstrap";
import './Home.css'
import {Card} from 'react-bootstrap';   

import banner from '../../assets/images/Banner.png'
import back from '../../assets/images/back.jpg'
import AppNavbar from "../AppNavbar";
import Home1 from '../Home/Home1'
import { NavLink, withRouter} from 'react-router-dom';
import { loginModalOpen,loadUser } from './../../action/authActions';
import { connect } from 'react-redux';
import ApexChart from '../Home/ApexChart'

const styles = {
    mediaItem: {
      border: "1px solid gray",
      backgroundColor: "#f5f5f5",
 
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  };

class Home extends Component {

componentDidMount(e){
  var myobj = document.getElementById("bodyClick");
  if(myobj!==null){
  document.documentElement.classList.toggle("nav-open");
  console.log("Body Click Removed");
  myobj.remove();

}

this.props.loadUser();
 if(this.props.isAuthenticated){
  //  <Redirect from='/' to='/admin/dashboard' />
  // this.props.history.push('/admin/dashboard')
  // this.props.loginModalOpen(false);
  // ,backgroundPosition: 'center',backgroundSize: '150rem',
 }
}
  render() {
    return (
      <div>
        <div className="App" style={{ backgroundImage: `url("${back}")`,backgroundRepeat:'no-repeat'}} >
            <AppNavbar/>
            <Container>
          <div className="content" >
            <Container fluid>
              <Row>
              
                <Col md={6} >
                    <Card className="intro_card">
                        <div className="text-black mt-3 card-content">
                            <h1 className=" mb-3 font-weight-bold">Product Inventory Management Application</h1>
                            <p>Keep calm and let statistics help you with your stocktaking process!</p><p className="font-size-lg text-black-50">Use this individual application for a head start in building a product that is related to the commerce niche. This template comes with pre-built pages for orders, customers and various sales releated analytics.</p>
                            <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25"></div>
                                <div>
                                    <NavLink style={{color:'white'}} to='/admin/dashboard' className="d-block d-sm-inline-block btn btn-primary btn-lg" >
                                    <span className="btn-wrapper--icon">
                                    </span><span className="btn-wrapper--label" >Dashboard</span></NavLink>
                                    <NavLink className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3 btn btn-outline-primary btn-lg" to="/admin/products"><span>Products Filters</span></NavLink>
                                </div>
                            </div>
                    </Card>
                </Col>
                
                <Col md={6}>
                  <Card className='banner-card'>
                      <div className='banner'>
                          <img src={banner}/>
                      </div>
                  </Card>
                </Col>
              
              </Row>
              
            
            </Container>
           
            
      </div>
      <ApexChart/>
      </Container>
      
      
      <Home1/>
      </div>
       
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return({
    isAuthenticated:state.auth.isAuthenticated
  })
}

export default connect(mapStateToProps,{loginModalOpen,loadUser})(withRouter(Home));
