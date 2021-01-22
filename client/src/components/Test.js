import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import CountUp from 'react-countup';
import React from 'react';
import './Test.css';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuestionCircle,faUserCircle,faDollarSign,faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
// import {Card,Grid,Button,Nav,NavItem,Col,Row,Modal,FormGroup,Input,Collapse} from 'reactstrap';
import {Container,Col,Row} from 'react-bootstrap'
import {Card} from 'reactstrap';
export default function Test() {


        return (
            <>
            <Container>
                <Row  className="cardlist">
                    <Col lg={3} sm={6}>
                        <Card className="card-box card1 bg-midnight-bloom p-3 mb-5">
                        
                            <div className="d-flex align-items-center">

                            <AnimatedProgressProvider
                                    valueStart={0}
                                    
                                    valueEnd={54}
                                    duration={3}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbarWithChildren
                                        value={value}
                                        
                                        /* This is important to include, because if you're fully managing the
                                    animation yoursimport AnimatedProgressProvider from './AnimatedProgressProvider';
elf, you'll want to disable the CSS animation. */
                                        styles={buildStyles({pathTransition: "none",pathColor: "rgba(255,255,255,.95)", trailColor: "rgba(255,255,255,.1)"})}
                                        > 

                                    <div className="text-white d-40 rounded-circle btn-icon">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="font-size-lg icon1 " />
                                    </div>
                                    </CircularProgressbarWithChildren>
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                
                                <div className="pl-3">
                                    <div className=" text-white  font-weight-bold">Orders</div>
                                    <div className="value font-weight-bold pt-2 text-white ">
                                        <CountUp
                                            start={0}
                                            end={99}
                                            duration={6}
                                            delay={0}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Card className="card-box card2 bg-royal p-3 mb-5">
                            <div className="d-flex align-items-center">
                            
                            <AnimatedProgressProvider
                                    valueStart={0}
                                    
                                    valueEnd={54}
                                    duration={3}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbarWithChildren
                                        value={value}
                                        
                                        /* This is important to include, because if you're fully managing the
                                    animation yoursimport AnimatedProgressProvider from './AnimatedProgressProvider';
elf, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none",pathColor: "rgba(255,255,255,.95)", trailColor: "rgba(255,255,255,.1)" })}
                                        >
                                    <div className="text-white d-40 rounded-circle btn-icon">
                                        <FontAwesomeIcon icon={faUserCircle} className="font-size-lg icon1 " />
                                    </div>
                                    </CircularProgressbarWithChildren>
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                <div className="pl-3">
                                    <div className=" text-white font-weight-bold">Visitors</div>
                                    <div className="value font-weight-bold text-white pt-2  ">
                                        <CountUp
                                            start={0}
                                            end={54}
                                            duration={6}
                                            delay={2}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Card className="card-box card3 bg-deep-sky p-3 mb-5">
                            <div className="d-flex align-items-center">
                            <AnimatedProgressProvider
                                    valueStart={0}
                                    
                                    valueEnd={54}
                                    duration={3}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbarWithChildren
                                        value={value}
                                        
                                        /* This is important to include, because if you're fully managing the
                                    animation yoursimport AnimatedProgressProvider from './AnimatedProgressProvider';
elf, you'll want to disable the CSS animation. */
                                        styles={buildStyles({ pathTransition: "none",pathColor: "rgba(255,255,255,.95)", trailColor: "rgba(255,255,255,.1)" })}
                                        >
                                    <div className="text-white d-40 rounded-circle btn-icon">
                                        <FontAwesomeIcon icon={faCommentDollar} className="font-size-lg icon1 " />
                                    </div>
                                    </CircularProgressbarWithChildren>
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                <div className="pl-3">
                                    <div className=" text-white font-weight-bold">Income</div>
                                    <div className="value font-weight-bold pt-2 text-white ">
                                        $<CountUp
                                            start={0}
                                            end={134.7}
                                            duration={6}
                                            delay={0}
                                            separator=""
                                            decimals={0}
                                            decimal=","
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Card className="card-box card4 bg-plum-plate p-3 mb-5">
                            <div className="d-flex align-items-center">
                            <AnimatedProgressProvider
                                    valueStart={0}
                                    
                                    valueEnd={54}
                                    duration={3}
                                    easingFunction={easeQuadInOut}
                                    
                                >
                                    {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbarWithChildren
                                        value={value}


                                        styles={buildStyles({ pathTransition: "none",pathColor: "rgba(255,255,255,.95)", trailColor: "rgba(255,255,255,.1)" })}
                                        > <div className="text-white d-40 rounded-circle btn-icon">
                                        <FontAwesomeIcon icon={faCommentDollar} className="font-size-lg icon1 " />
                                    </div>
                                    </CircularProgressbarWithChildren>
                                    );
                                    }}
                                </AnimatedProgressProvider>
                                <div className="pl-3">
                                    <div className="text-white  font-weight-bold">Expenses</div>
                                    <div className="value font-weight-bold pt-2  text-white">
                                        $<CountUp
                                        start={0}
                                        end={3.496}
                                        duration={6}
                                        delay={2}
                                        separator=""
                                        decimals={3}
                                        decimal=","
                                    />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
        </Container>
            </>
        );
    }