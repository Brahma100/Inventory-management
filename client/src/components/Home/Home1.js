import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col,Button,Media,Form,Tooltip } from "react-bootstrap";
// import  Card  from "../Card/Card.js";
import './Home1.css'
import {Card} from 'react-bootstrap';   
import  StatsCard  from "../StatsCard/StatsCard.js";
import  Tasks  from "../Tasks/Tasks.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import banner from '../../assets/images/Banner.png'
import back from '../../assets/images/back.jpg'
import AppNavbar from "../AppNavbar";
import ApexChart from './ApexChart';


import { NavLink } from 'react-router-dom';
import TrendingProductList from "../ProductsList/TrendingProductList";
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

class Home1 extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
<>
<div className='App1' >

        <Container>
          <Row>
          
           
            
            <Col md={6}>
            
             <TrendingProductList/>
             
            </Col>
            <Col md={6} >
                <Card className="intro_card">
                    <div className="text-black mt-3 card-content">
                        <h1 className=" mb-3 font-weight-bold">Bamburgh React Commerce Application with Reactstrap PRO</h1>
                        <p>Fully coded, perfectly responsive on all screen sizes. Start working on your project today!</p><p className="font-size-lg text-black-50">Use this individual application for a head start in building a product that is related to the commerce niche. This template comes with pre-built pages for orders, customers and various sales releated analytics.</p>
                        <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25"></div>
                            <div>
                                <a className="d-block d-sm-inline-block btn btn-primary btn-lg">
                                <span className="btn-wrapper--icon">
                                </span><span className="btn-wrapper--label"><NavLink style={{color:'white'}} to='/admin/dashboard'>Dashboard</NavLink></span></a>
                                <a className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3 btn btn-outline-primary btn-lg" href="#"><span>Products Filters</span></a>
                            </div>
                        </div>
                </Card>
            </Col>
          </Row>
          </Container>
          </div>
      </>
    );
  }
}

export default Home1;
