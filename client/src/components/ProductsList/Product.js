import { faArrowAltCircleDown, faCalendar, faCalendarAlt, faCalendarDay, faCartPlus, faChevronDown, faShoppingBag, faShoppingBasket, faStar, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink,useHistory,useParams } from 'react-router-dom';
import './Product.css';
import defaultPro from '../../assets/images/default-pro.jpg';
import {loginModalOpen,loadUser} from '../../action/authActions';
import {rankItem} from '../../action/itemAction';

const Product=(props)=>{
    const history=useHistory();
    var params=useParams();
    const [product,setItem]=useState({});


 

    useEffect(()=>{
        props.loadUser();
        if(!props.isAuthenticated){
            console.log("From Product to Home");
            props.history.push('/')
            props.loginModalOpen(true);
           }
           else{
        setItem(history.location.state.item);
        console.log("Items",history.location.state.item);
        // console.log("User",history.location.state.user);
        props.rankItem({id:history.location.state.item.id});
    }
    },[history,props.isAuthenticated]);
    // useEffect(()=>{
    //     //       if(parseInt(localStorage.getItem(history.location.state.item.id))!==parseInt(history.location.state.user._id)){
    //             // console.log("User1",history.location.state.user._id,localStorage.getItem(history.location.state.item.id));
    //     //         localStorage.setItem(history.location.state.item.id,history.location.state.user._id);
               
    //     //     }
            
    //       },[]);
    return(
     <>
        <div>
            <Container style={{marginTop:'1rem'}}>
                {/* <Row>
                    <Card><h1>{params.name}</h1></Card>
                </Row> */}
                <Row>
                    <Col sm={5}>

                       <Card className="p-img-card">
                       
                       <img className="p-img" src={product.img?product.img:defaultPro}/>
                      
                        
                       </Card>
                       <Row>
                           <div class="Add-to-cart-action-div">
                                <Button><FontAwesomeIcon style={{paddingRight:'.3rem'}} icon={faCartPlus}/>Add To Cart</Button>
                                <Button><FontAwesomeIcon style={{paddingRight:'.3rem'}} icon={faShoppingBasket}/>Buy Now</Button>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={7}>
                    <Card>
                        <Container style={{padding:'1rem 2rem'}}>
                            <Row>
                                <span style={{color:'#3b44c1',fontSize:'.8rem'}}>{product.manufacturer}</span>
                            </Row>
                            <Row>
                                <h3 style={{margin:'0rem'}}>{product.name}</h3 >
                            </Row>
                            <Row>
                                <h4  style={{margin:'.5rem 0rem',fontWeight:'bold',fontSize:'400 !important'}}>₹{product.price}</h4>
                            </Row>
                            <Row style={{display:'flex'}}>
                                <p style={{borderRadius:'5px',background:'green',color:'white',padding:'.1rem .3rem',fontSize:'.8rem'}}>{product.rating?product.rating:"0"} <FontAwesomeIcon  icon={faStar}/></p> <span style={{paddingLeft:'.2rem',color:'#3b44c1'}}>Ratings Out of 5</span>
                            </Row>
                            <Row>
                                <h7 style={{color:'gray',display:'flex',alignItems:'center'}}><FontAwesomeIcon style={{marginRight:'.2rem'}} icon={faShoppingBag}/><b style={{marginRight:'.2rem'}}>Available Stock:</b></h7><span style={{color:'green'}}><b>{product.stock}</b></span>
                            </Row>
                            <Row>
                                <h7 style={{color:'gray',display:'flex',alignItems:'center'}}><FontAwesomeIcon style={{marginRight:'.2rem'}} icon={faUser}/><b style={{marginRight:'.2rem'}}>Added By:</b></h7><span><b>{product.user?product.user.fname+" "+product.user.lname:null}</b></span>
                            </Row>
                            <Row>
                                <h7 style={{color:'gray',display:'flex',alignItems:'center'}}><FontAwesomeIcon style={{marginRight:'.2rem'}} icon={faCalendarAlt}/><b style={{marginRight:'.2rem'}}>Created Date:</b></h7><span>{product.date}</span>
                            </Row>
                           
                        </Container>
                        <hr style={{marginBottom:'0rem'}}/>
                        <Container style={{padding:'1rem 2rem'}}>
                            <Row>
                            <Accordion defaultActiveKey="1">
                                
                                    <Accordion.Toggle style={{curser:'pointer'}} as={Dropdown} variant="link" eventKey="0">
                                        Description <FontAwesomeIcon icon={faChevronDown}/>
                                    </Accordion.Toggle>
                                   
                                    <Accordion.Collapse eventKey="0">
                                        <p>
Keep work and entertainment going with the realme C12 smartphone featuring a 6000 mAh battery. It also comes with the Super Power Saving mode that lets you use the basic features of your phone when it is low on charge. What’s more, you can capture your surroundings well with the help of the 13 MP AI triple rear camera. You can make use of the Super Nightscape mode to click stunning pictures even in low-lit conditions. {product.description}</p>
                                    </Accordion.Collapse>
                                
                                
                            </Accordion>
                            </Row>
                        </Container>

                       </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        
                        {/* <Button>Add To Cart</Button>
                        <Button>Buy Now</Button> */}
                    </Col>
                </Row>
            </Container>
        </div>
     </>   
    )
}
const mapStateToProps=state=>{
    return{
        isAuthenticated:state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps,{rankItem,loadUser,loginModalOpen})(Product) ;