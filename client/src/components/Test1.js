import './Test1.css';
import React,{useState} from 'react';
import Rating from 'react-rating';
import clsx from 'clsx';
import Nouislider from 'nouislider-react';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Input,CardHeader,PaginationItem,PaginationLink,Pagination} from 'reactstrap';
import {Card,Container,Col,Row,Collapse,Button} from 'react-bootstrap'
import {  faHeart,faTrash,faStar,faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import product4 from '../../../assets/images/stock-products/product-4.png';
// import product5 from '../../../assets/images/stock-products/product-5.png';
// import product6 from '../../../assets/images/stock-products/product-6.png';


export default function Test1() {

        const [isPrice, setPrice] = useState(true);
        const togglePrice = () => setPrice(!isPrice);

        const [isBrand, setBrand] = useState(true);
        const toggleBrand = () => setBrand(!isBrand);

        const [isColor, setColor] = useState(true);
        const toggleColor = () => setColor(!isColor);

        const [isCpu, setCpu] = useState(false);
        const toggleCpu = () => setCpu(!isCpu);


        return (
            <>

               <Row>
                   <Col xl="4">
                       <Card className="card1 card-box mb-5 accordion">
                           <Card className={clsx("border-0 bg-transparent shadow-none rounded-0 card-box", {'panel-open': isPrice})}>
                               <Card className=" border-0 bg-transparent shadow-none rounded-top">
                                   <CardHeader className="rounded-top">
                                       <div className="panel-title">
                                           <div className="accordion-toggle rounded-top overflow-hidden">
                                               <Button color="link" size="lg" className="border-bottom-0 d-flex align-items-center justify-content-between"
                                                       onClick={togglePrice}>
                                                   <span className="font-weight-bold">Price</span>
                                                   <FontAwesomeIcon icon={faAngleUp} className="font-size-xl accordion-icon"/>
                                               </Button>
                                           </div>
                                       </div>
                                   </CardHeader>
                                   <Collapse isOpen={isPrice}>
                                       <div className="px-4 pt-5 pb-4">
                                           <Nouislider connect range={{ min: 50, max: 3965 }} start={[650, 2999]} step={1} tooltips />

                                       </div>
                                   </Collapse>
                               </Card>
                           </Card>
                           <div className="divider bg-dark opacity-4" />
                           <Card className={clsx("border-0 bg-transparent shadow-none rounded-0 card-box", {'panel-open': isBrand})}>
                               <Card className="border-0 bg-transparent shadow-none rounded-0">
                                   <CardHeader className="rounded-0">
                                       <div className="panel-title">
                                           <div className="accordion-toggle rounded-0 overflow-hidden">
                                               <Button color="link" size="lg" className="border-bottom-0 d-flex align-items-center justify-content-between"
                                                       onClick={toggleBrand}>
                                                   <span className="font-weight-bold">Brand</span>
                                                   <FontAwesomeIcon icon={faAngleUp} className="font-size-xl accordion-icon"/>
                                               </Button>
                                           </div>
                                       </div>
                                   </CardHeader>
                                   <Collapse isOpen={isBrand}>
                                       <div className="px-4 pt-2 pb-4">
                                           <Row>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1001" className="m-2 align-self-center" label="Lenovo" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1003" className="m-2 align-self-center" label="Intel" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1000" className="m-2 align-self-center" label="Apple" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1004" className="m-2 align-self-center" label="Huawei" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1005" className="m-2 align-self-center" label="Xiaomi" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1006" className="m-2 align-self-center" label="LG" />
                                               </Col>
                                           </Row>
                                       </div>
                                   </Collapse>
                               </Card>
                           </Card>
                           <div className="divider bg-dark opacity-4" />
                           <Card className={clsx("border-0 bg-transparent shadow-none rounded-0 card-box", {'panel-open': isColor})}>
                               <Card className="border-0 bg-transparent shadow-none rounded-0">
                                   <CardHeader className="rounded-0">
                                       <div className="panel-title">
                                           <div className="accordion-toggle rounded-0 overflow-hidden">
                                               <Button color="link" size="lg" className="border-bottom-0 d-flex align-items-center justify-content-between"
                                                       onClick={toggleColor}>
                                                   <span className="font-weight-bold">Color</span>
                                                   <FontAwesomeIcon icon={faAngleUp} className="font-size-xl accordion-icon"/>
                                               </Button>
                                           </div>
                                       </div>
                                   </CardHeader>
                                   <Collapse isOpen={isColor}>
                                       <div className="px-4 pt-2 pb-4">
                                           <div className="py-2 d-flex align-items-center justify-content-center flex-wrap">
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-danger">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-first">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg active bg-second">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-warning">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-deep-blue">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-plum-plate">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-amy-crisp">&nbsp;</a>
                                               <a href="#/" onClick={e => e.preventDefault()} className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-success">&nbsp;</a>
                                           </div>
                                       </div>
                                   </Collapse>
                               </Card>
                           </Card>
                           <div className="divider bg-dark opacity-4" />
                           <Card className={clsx("border-0 bg-transparent shadow-none rounded-0 card-box", {'panel-open': isCpu})}>
                               <Card className="border-0 bg-transparent shadow-none rounded-bottom">
                                   <CardHeader className="rounded-bottom">
                                       <div className="panel-title">
                                           <div className="accordion-toggle rounded-bottom overflow-hidden">
                                               <Button color="link" size="lg" className="border-bottom-0 d-flex align-items-center justify-content-between"
                                                       onClick={toggleCpu}>
                                                   <span className="font-weight-bold">CPU Cores</span>
                                                   <FontAwesomeIcon icon={faAngleUp} className="font-size-xl accordion-icon"/>
                                               </Button>
                                           </div>
                                       </div>
                                   </CardHeader>
                                   <Collapse isOpen={isCpu}>
                                       <div className="px-4 pt-2 pb-4">
                                           <Row>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1007" className="m-2 align-self-center" label="Atom" />
                                               </Col>
                                               <Col md="6">
                                                   <Input type="checkbox" id="CustomCheckbox1008" className="m-2 align-self-center" label="Multi" />
                                               </Col>
                                           </Row>

                                           <div className="p-4">
                                            <Nouislider connect range={{ min: 1, max: 8 }} start={[2, 4]} step={1} decimals={0} />
                                           </div>

                                       </div>
                                   </Collapse>
                               </Card>
                           </Card>
                       </Card>
                   </Col>









                   <Col xl="8">
                       <Card className="mb-5">
                           {/* <div className="card-tr-actions z-over">
                               <Button href="#/" onClick={e => e.preventDefault()} color="neutral-danger" className="btn-transition-none btn-pill d-30 btn-icon p-0">
                                   <FontAwesomeIcon icon={faHeart} />
                               </Button>
                           </div> */}
                           <Row className="product_list">
                               <Col lg="4" className="d-flex align-items-center justify-content-center r-border">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <a href="#/" onClick={e => e.preventDefault()} className="card-img-wrapper card-box-hover rounded">
                                       <img alt="..." className="img-fluid hover-scale-lg" src={product1}  />
                                   </a>
                               </Col>
                               <Col lg="5" className="t-a-left d-flex align-items-center justify-content-centerr-border r-border">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <div className="py-4">
                                       <div className="font-weight-bold font-size-xxl">
                                           Apple TV Gen. 4 2020
                                       </div>
                                       <div className="d-flex flex-wrap pt-2 pb-3">
                                           <Rating initialRating={4} stop={5}
                                                   emptySymbol={<span className="text-black-50 mr-1 font-size-xl opacity-3"><FontAwesomeIcon icon={faStar}/></span>}
                                                   fullSymbol={<span className="text-warning mr-1 font-size-xl"><FontAwesomeIcon icon={faStar}/></span>}
                                           />
                                       </div>
                                       <div className="font-size-sm text-black-50 pb-3">
                                           All components from the General dashboard template can be used in the individual applications pages, without modifications.
                                       </div>
                                       <div className="font-size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Color:
                                               </span>
                                               Black
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Operating System:
                                               </span>
                                               MacOS
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Version:
                                               </span>
                                               Gen 5
                                           </div>
                                           <div className="pt-1">
                                               <span className="text-black-50 pr-2">
                                                   Processor:
                                               </span>
                                               i5 9700k
                                           </div>
                                       </div>
                                   </div>
                               </Col>
                               <Col lg="3" className="d-flex align-items-center justify-content-center">
                                   <div className="px-xl-3">
                                       <div className="font-weight-bold font-size-xxl">
                                           $ 999,45
                                       </div>
                                       <div className="font -size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Stock:
                                               </span>
                                               <b>45</b> pcs.
                                           </div>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" className="add_cart">
                                               Add to cart
                                           </Button>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" className="danger" >
                                               <span className="btn-wrapper--icon">
                                                    <FontAwesomeIcon icon={faTrash} />
                                               </span>
                                           </Button>
                                       </div>
                                   </div>
                               </Col>
                           </Row>
                       </Card>
                       <Card className="mb-5">
                           <div className="card-tr-actions z-over">
                               <Button href="#/" onClick={e => e.preventDefault()} color="neutral-danger" className="btn-transition-none btn-pill d-30 btn-icon p-0">
                                   <FontAwesomeIcon icon={['far', 'heart']} />
                               </Button>
                           </div>
                           <Row>
                               <Col lg="4" className="d-flex align-items-center justify-content-center">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <a href="#/" onClick={e => e.preventDefault()} className="card-img-wrapper card-box-hover rounded">
                                       <img alt="..." className="img-fluid hover-scale-lg" src={product2}  />
                                   </a>
                               </Col>
                               <Col lg="5" className="d-flex align-items-center justify-content-center">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <div className="py-4">
                                       <div className="font-weight-bold font-size-xxl">
                                           iPhone 11 PRO Max
                                       </div>
                                       <div className="d-flex flex-wrap pt-2 pb-3">
                                           <Rating initialRating={5} stop={5}
                                                   emptySymbol={<span className="text-black-50 mr-1 font-size-xl opacity-3"><FontAwesomeIcon icon={['far', 'star']}/></span>}
                                                   fullSymbol={<span className="text-warning mr-1 font-size-xl"><FontAwesomeIcon icon={['fas', 'star']}/></span>}
                                           />
                                       </div>
                                       <div className="font-size-sm text-black-50 pb-3">
                                           All components from the General dashboard template can be used in the individual applications pages, without modifications.
                                       </div>
                                       <div className="font-size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Color:
                                               </span>
                                               Black
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Operating System:
                                               </span>
                                               MacOS
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Version:
                                               </span>
                                               Gen 5
                                           </div>
                                           <div className="pt-1">
                                               <span className="text-black-50 pr-2">
                                                   Processor:
                                               </span>
                                               i5 9700k
                                           </div>
                                       </div>
                                   </div>
                               </Col>
                               <Col lg="3" className="d-flex align-items-center justify-content-center">
                                   <div className="px-xl-3">
                                       <div className="font-weight-bold font-size-xxl">
                                           $ 1299,00
                                       </div>
                                       <div className="font-size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Stock:
                                               </span>
                                               <b>99</b> pcs.
                                           </div>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" color="first">
                                               Add to cart
                                           </Button>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" color="danger">
                                               <span className="btn-wrapper--icon">
                                                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                                               </span>
                                           </Button>
                                       </div>
                                   </div>
                               </Col>
                           </Row>
                       </Card>
                       <Card className="mb-5">
                           <div className="card-tr-actions z-over">
                               <Button href="#/" onClick={e => e.preventDefault()} color="neutral-danger" className="btn-transition-none btn-pill d-30 btn-icon p-0">
                                   <FontAwesomeIcon icon={['far', 'heart']} />
                               </Button>
                           </div>
                           <Row>
                               <Col lg="4" className="d-flex align-items-center justify-content-center">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <a href="#/" onClick={e => e.preventDefault()} className="card-img-wrapper card-box-hover rounded">
                                       <img alt="..." className="img-fluid hover-scale-lg" src={product3}  />
                                   </a>
                               </Col>
                               <Col lg="5" className="d-flex align-items-center justify-content-center">
                                   <div className="divider-v divider-v-md d-none d-lg-block" />
                                   <div className="py-4">
                                       <div className="font-weight-bold font-size-xxl">
                                           iPad PRO 13" 2019
                                       </div>
                                       <div className="d-flex flex-wrap pt-2 pb-3">
                                           <Rating initialRating={3} stop={5}
                                                   emptySymbol={<span className="text-black-50 mr-1 font-size-xl opacity-3"><FontAwesomeIcon icon={['far', 'star']}/></span>}
                                                   fullSymbol={<span className="text-warning mr-1 font-size-xl"><FontAwesomeIcon icon={['fas', 'star']}/></span>}
                                           />
                                       </div>
                                       <div className="font-size-sm text-black-50 pb-3">
                                           All components from the General dashboard template can be used in the individual applications pages, without modifications.
                                       </div>
                                       <div className="font-size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Color:
                                               </span>
                                               Black
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Operating System:
                                               </span>
                                               MacOS
                                           </div>
                                           <div className="py-1">
                                               <span className="text-black-50 pr-2">
                                                   Version:
                                               </span>
                                               Gen 5
                                           </div>
                                           <div className="pt-1">
                                               <span className="text-black-50 pr-2">
                                                   Processor:
                                               </span>
                                               i5 9700k
                                           </div>
                                       </div>
                                   </div>
                               </Col>
                               <Col lg="3" className="d-flex align-items-center justify-content-center">
                                   <div className="px-xl-3">
                                       <div className="font-weight-bold font-size-xxl">
                                           $ 399,34
                                       </div>
                                       <div className="font-size-sm">
                                           <div className="py-2">
                                               <span className="text-black-50 pr-2">
                                                   Stock:
                                               </span>
                                               <b>21</b> pcs.
                                           </div>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" color="first">
                                               Add to cart
                                           </Button>
                                       </div>
                                       <div className="pt-3">
                                           <Button size="sm" color="danger">
                                               <span className="btn-wrapper--icon">
                                                    <FontAwesomeIcon icon={['far', 'trash-alt']} />
                                               </span>
                                           </Button>
                                       </div>
                                   </div>
                               </Col>
                           </Row>
                       </Card>
                       <div className="d-flex align-items-center justify-content-center flex-wrap">
                           <Pagination size="lg" className="pagination-icons">
                               <PaginationItem disabled>
                                   <PaginationLink first href="#/" onClick={e => e.preventDefault()}>
                                       <FontAwesomeIcon icon={['fas', 'angle-double-left']}/>
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem disabled>
                                   <PaginationLink previous href="#/" onClick={e => e.preventDefault()}>
                                       <FontAwesomeIcon icon={['fas', 'chevron-left']}/>
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem active>
                                   <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                       1
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem>
                                   <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                       2
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem>
                                   <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                       3
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem>
                                   <PaginationLink next href="#/" onClick={e => e.preventDefault()}>
                                       <FontAwesomeIcon icon={['fas', 'chevron-right']}/>
                                   </PaginationLink>
                               </PaginationItem>
                               <PaginationItem>
                                   <PaginationLink last href="#/" onClick={e => e.preventDefault()}>
                                       <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
                                   </PaginationLink>
                               </PaginationItem>
                           </Pagination>
                       </div>
                   </Col>
               </Row>

            </>
        );
    }
