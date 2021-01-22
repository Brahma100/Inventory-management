// import 'react-apexcharts';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'reactstrap';
import '@fortawesome/fontawesome-svg-core';
import {Container,Button,Nav,NavItem,Col,Row,Modal,FormGroup,Input,Collapse} from 'reactstrap';

import {BrowserRouter as Router } from 'react-router-dom';
import {useState} from 'react';
import { FlagIcon } from 'react-flag-kit';
import clsx from 'clsx';
// import { Router } from 'express';
    export default function Add_Product() {

        const [loginModal, setLoginModal] = useState(false);
        const toggleLogin = () => setLoginModal(!loginModal);

        const [collapse, setCollapse] = useState(false);
        const toggle = () => setCollapse(!collapse);

        return (
            <Router>

                <div className="bg-white shadow-xxl flex-column header-nav-wrapper navbar-light">
                    <Container className="header-top-section pt-2 d-block">
                        <div className="d-flex header-nav-menu justify-content-between align-items-center navbar-dark">
                            <ul className="d-flex">
                                <li className="ml-0">
                                    <Button color="link" className="rounded-sm d-30 p-0 btn-icon btn-transition-none" href="#/" onClick={e => e.preventDefault()}>
                                        <span className="btn-wrapper--icon">
                                            <FontAwesomeIcon icon={['fas', 'user']} className="font-size-sm"/>
                                        </span>
                                    </Button>
                                </li>
                                <li>
                                    <Button color="link" className="rounded-sm d-30 p-0 btn-icon btn-transition-none" href="#/" onClick={e => e.preventDefault()}>
                                        <span className="btn-wrapper--icon">
                                            <FontAwesomeIcon icon={['far', 'bell']} className="font-size-sm"/>
                                        </span>
                                    </Button>
                                </li>
                            </ul>
                            <ul className="d-flex">
                                <li>
                                    <a className="rounded-sm py-1 px-3 font-size-xs text-uppercase" href="#/" onClick={e => e.preventDefault()}>
                                        Languages
                                        <span className="opacity-5 dropdown-arrow">
                                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                                    </span>
                                    </a>
                                    <div className="submenu-dropdown submenu-dropdown--sm">
                                        <div className="shadow-sm-dark bg-white rounded-sm">
                                            <Nav pills className="nav-neutral-primary flex-column p-2">
                                               
                                            </Nav>
                                        </div>
                                    </div>
                                </li>
                                <li className="mr-0">
                                    <NavLink className="rounded-sm py-1 px-3 font-size-xs text-uppercase" to="/PageLoginIllustration">
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="divider mt-2" />
                    </Container>
                    <Container className="py-4">
                        <div className="app-nav-logo flex-grow-0">
                            <NavLink to="/Homepage" title="Bamburgh React Commerce Application with Reactstrap PRO" className="app-nav-logo app-nav-logo--dark">
                                <div className="app-nav-logo--icon bg-white">
                                    <img alt="Bamburgh React Commerce Application with Reactstrap PRO" src="https://dlskits.com/wp-content/uploads/2018/05/Dream-League-Soccer-Barcelona-Logo.png"/>
                                </div>
                                <div className="app-nav-logo--text">
                              <span>Commerce</span>
                                
                                    <b>bamburgh</b>
                                </div>
                            </NavLink>
                        </div>
                        <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
                            <ul className="d-flex justify-content-center">
                                <li>
                                    <NavLink to="/Dashboard" className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Products" className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ProductsFilters" className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                                        Filters
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Orders" className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                                        Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                                        Apps
                                        <span className="opacity-5 dropdown-arrow">
                                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                                    </span>
                                    </a>
                                    <div className="submenu-dropdown submenu-dropdown--md">
                                        <div className="shadow-sm-dark w-100 bg-sunrise-purple p-4 rounded">
                                            <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">Individual Apps</div>
                                            
                                            <Nav pills className="nav-transparent nav-pills-rounded flex-column">
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-admin-dashboard-reactstrap-pro-demo" target="_blank" className="px-4 text-white-50 d-flex align-items-center">
                                                        <span>General</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-crypto-application-reactstrap-pro-demo" target="_blank" className="px-4 d-flex text-white-50 align-items-center">
                                                        <span>Crypto</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-messenger-application-reactstrap-pro-demo" target="_blank" className="px-4 d-flex text-white-50 align-items-center">
                                                        <span>Messenger</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="active px-4 d-flex text-white-50 align-items-center">
                                            <span>
                                            Commerce
                                            </span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="disabled px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Learning</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Monitoring</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Fleet Manager</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Banking</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="header-nav-actions ml-auto ml-lg-3 ml-lg-4 flex-grow-0">
                                    <span className="d-none d-lg-flex">
                                        <Button tag={NavLink} to="/Dashboard" className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm" color="primary">
                                        Dashboard
                                    </Button>
                                        <Button onClick={toggleLogin} className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm ml-3" color="dark">
                                        Register
                                    </Button>
                                    </span>
                            <span className="d-block d-lg-none">
                                    <button onClick={toggle} className={clsx("navbar-toggler hamburger hamburger--elastic", {'is-active': collapse})}>
                                    <span className="hamburger-box">
                                    <span className="hamburger-inner"/>
                                    </span>
                                    </button>
                                    </span>
                        </div>
                        <div className="d-flex d-lg-none">
                            <Collapse isOpen={collapse} className="nav-collapsed-wrapper navbar-collapse">
                                <div className="nav-inner-wrapper">

                                    <Button onClick={toggle} color="danger" className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                                    <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon icon={['fas', 'times']}/>
                                    </span>
                                    </Button>

                                    <div className="p-3">
                                        <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">Navigation Menu</div>
                                        <Nav pills className="nav-neutral-primary nav-pills-rounded flex-column">
                                            <NavItem>
                                                <NavLink tag={NavLink} to="/Dashboard" className="px-4 d-flex align-items-center">
                                                    <span>Dashboard</span>
                                                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={NavLink} to="/Products" className="px-4 d-flex align-items-center">
                                                    <span>Products</span>
                                                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={NavLink} to="/ProductsFilters" className="px-4 d-flex align-items-center">
                                                    <span>Filters</span>
                                                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink tag={NavLink} to="/Orders" className="px-4 d-flex align-items-center">
                                                    <span>Orders</span>
                                                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div className="divider" />
                                    <div className="m-3">
                                        <div className="bg-sunrise-purple px-3 py-4 rounded">
                                            <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">Individual Apps</div>
                                            <Nav pills className="nav-transparent nav-pills-rounded flex-column">
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-admin-dashboard-reactstrap-pro-demo" target="_blank" className="px-4 text-white-50 d-flex align-items-center">
                                                        <span>General</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-crypto-application-reactstrap-pro-demo" target="_blank" className="px-4 d-flex text-white-50 align-items-center">
                                                        <span>Crypto</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="https://demo.uifort.com/bamburgh-react-messenger-application-reactstrap-pro-demo" target="_blank" className="px-4 d-flex text-white-50 align-items-center">
                                                        <span>Messenger</span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="active px-4 d-flex text-white-50 align-items-center">
                                            <span>
                                            Commerce
                                            </span>
                                                        <FontAwesomeIcon icon={['fas', 'angle-right']} className="opacity-6 ml-auto"/>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="disabled px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Learning</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Monitoring</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Fleet Manager</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink href="#/" onClick={e => e.preventDefault()} className="px-4 d-flex text-white-50 align-items-center disabled">
                                                        <span>Banking</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <div className="card-footer bg-secondary text-center p-3">
                                        <Button tag="a" href="https://uifort.com/template/bamburgh-react-commerce-application-reactstrap-pro" rel="noopener noreferrer" target="_blank" className="font-weight-bold text-nowrap font-size-sm" color="success">
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </Container>
                </div>
                <div className={clsx("collapse-page-trigger", {'is-active': collapse})} onClick={toggle}/>
                <Modal zIndex={2000} centered size="xl" isOpen={loginModal} toggle={toggleLogin} contentClassName="modal-example-1 border-0 shadow-sm-dark bg-white p-3 p-xl-0">
                    <Row className="no-gutters">
                        <Col xl="5">
                            <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded br-xl-right-0">
                                <div className="flex-grow-1 w-100 d-flex align-items-center">
                                    <div className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7" style={{backgroundImage: 'https://dlskits.com/wp-content/uploads/2018/05/Dream-League-Soccer-Barcelona-Logo.png'}}/>
                                    <div className="bg-composed-wrapper--bg bg-second opacity-1 rounded br-xl-right-0"/>
                                    <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-5 rounded br-xl-right-0"/>
                                    <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                                        <div className="text-white text-center">
                                            <h1 className="display-3 my-3 font-weight-bold">
                                                Register
                                            </h1>
                                            <p className="font-size-lg mb-0 px-4 text-white-50">
                                                All components from the General dashboard template can be used in the individual applications pages, without modifications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl="7">
                            <Col lg="8" xl="10" className="mx-auto">
                                <div className="bg-white p-4 rounded">
                                    <div className="text-center my-4">
                                        <h1 className="display-4 mb-1 font-weight-bold">
                                            Create your account
                                        </h1>
                                        <p className="font-size-lg mb-0 text-black-50">
                                            Start benefiting from our tools right away
                                        </p>
                                    </div>
                                    <FormGroup>
                                        <label className="font-weight-bold">Email address</label>
                                        <Input placeholder="Enter your email address" type="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="d-flex justify-content-between mg-b-5">
                                            <label className="font-weight-bold">Password</label>
                                        </div>
                                        <Input placeholder="Enter your password" type="password" />
                                    </FormGroup>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <label className="font-weight-bold">First name</label>
                                                <Input placeholder="Enter your firstname" type="text" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <label className="font-weight-bold">Last name</label>
                                                <Input placeholder="Enter your lastname" type="text" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="form-group mb-3">
                                        By clicking the <strong>Create account</strong> button below you agree to our terms of service and privacy statement.
                                    </div>
                                    <div className="text-center mb-4">
                                        <Button color="primary" className="text-uppercase font-weight-bold font-size-sm my-3">Create account</Button>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Modal>

            </Router>
        );
    }