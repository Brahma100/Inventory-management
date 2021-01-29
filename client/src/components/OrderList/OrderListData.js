import React, { useEffect, useState } from 'react'
import { Card,Container, Row, Col,Button,Media,Form,Tooltip, Accordion, DropdownButton, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faFilter, faTimes,faEdit, faTrash, faArrowDown, faArrowLeft, faChevronCircleDown, faChevronCircleRight, faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../CustomCheckbox/CustomCheckbox';
import './OrderListData.css'
import {deleteItem, deleteSelectedItem} from '../../action/itemAction'
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';
import EditModal1 from '../auth/EditModal1';
import Price_Slider from '../Slider/Price_Slider';
import {NavLink} from 'react-router-dom'

const styles = {
    mediaItem: {
    //   margin:'1rem',
    //   border: "1px solid gray",
      backgroundColor: "#f5f5f5",
 
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  };

function OrderList({products,deleteSelectedItem,deleteItem}) {
    var f=0;
    let deleteAllClass="not-checked"
    const [state,setState]=useState({
        checkedBoxes:[],
        
    })
    // Column checkbox
    const [isManfacturer,setIsManufacturer]=useState(true);
    const [isRating,setIsRating]=useState(true);
    const [isPrice,setIsPrice]=useState(true);
    const [isStock,setIsStock]=useState(true);

    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);
    const [open4,setOpen4]=useState(false);
    const [chkBox,setChkBox]=useState(false)
    const [q,setQ]=useState("")

    const Search=(products)=>{
        return products.filter(product=>
                product.name.toLowerCase().indexOf(q.toLowerCase())!==-1 || //str.includes(PATTERN)
                // product.price.toLowerCase().indexOf(q.toLowerCase())!==-1 ||
                product.manufacturer.toLowerCase().indexOf(q.toLowerCase())!==-1
                );

        }

const deleteAll=(e)=>{
    deleteSelectedItem(state.checkedBoxes)
    // for(let i=0;i<state.checkedBoxes.length;i++){
    //     setTimeout(()=>
        
    //     {
            
    //         console.log("del Called")}
    //     ,3000);
    //     deleteItem(state.checkedBoxes[i]);
    // }
    setChkBox(false);
    setState(prevState=>{
            let {checkedBoxes}=prevState;
        checkedBoxes.splice(0, checkedBoxes.length)
        return {...prevState.checkedBoxes, checkedBoxes: checkedBoxes };
    });

}
const deleteProduct=()=>{
        
}
const handleCheck= async (e,product)=> {
        let itemName=e.target.name;
        let checked=e.target.checked;
      
        if(itemName==='checkAll'){
                    let searchedProduct=Search(products)
                    if(checked){
                        f=1
                        deleteAllClass+="checked"
                        console.log(deleteAllClass);
                        setChkBox(true)
                        setState(prevState=>{
                        let  {checkedBoxes}=prevState;

                            let categories = new Set(checkedBoxes)
                            for(var i=0;i<searchedProduct.length;i++)
                            categories.add(searchedProduct[i].id)
                            checkedBoxes=Array.from(categories)
                            return {...prevState.checkedBoxes,  checkedBoxes: checkedBoxes }

                        })
                console.log(state.checkedBoxes);
                    }
                    else{
                        f=0
                        deleteAllClass=""
                        setChkBox(false);
                        setState(prevState=>{
                                let {checkedBoxes}=prevState;
                            checkedBoxes.splice(0, checkedBoxes.length)
                            return {...prevState.checkedBoxes, checkedBoxes: checkedBoxes };
                        });
                        console.log(state.checkedBoxes);
                    }
        }

        else if(checked) {
            
            let arr = state.checkedBoxes;
            arr.push(product.id);
            console.log("Checked:",product.id,arr);
            
            setState(state=>({...state.checkedBoxes,checkedBoxes:arr}));
        } else {
            // if(f===1)
            setChkBox(false);
            let products=state.checkedBoxes.filter(id=>id!==product.id)
            // let products = state.checkedBoxes.splice(state.checkedBoxes.indexOf(product.id), 1);
            console.log("UnChecked:",product.id,products);
            setState(state=>({...state.checkedBoxes,checkedBoxes:products}));
        }	
    }
    
   

    return (
    
        <>







        <Col>
          <div className='products'>
                 <Card  className='cardpl'>
                 <Card.Header className='header'>
                
                     <div className='header-filter'>
                        <div style={{marginTop:'1rem'}}>
                                <input id="_checkbox"
                                    //   id={111111}
                                    name='checkAll'
                                    type="checkbox"
                                    checked={chkBox}
                                    onChange={(e)=>handleCheck(e)}
                                    
                                />
                                <label for="_checkbox">
                                <div id="tick_mark"></div>
                                </label>
                               
                        </div>
                        <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">Delete All</Tooltip>}
                                            >
                        <Button onClick={(e)=>deleteAll(e)} style={{display: state.checkedBoxes.length>0 ? 'block' : 'none' }} variant="danger" size="sm"><FontAwesomeIcon icon={faTrash}/></Button></OverlayTrigger>
                        <div className='search-bar' >
                          <FontAwesomeIcon icon={faSearch} />

                          <input type="text" value={q} placeholder="Search Products" onChange={(e)=>{setQ(e.target.value)}}/>
                          
                          
                          </div>
                          <div className='filter-icon'>
                          <DropdownButton title={<FontAwesomeIcon icon={faFilter} />} className='filter-button' style={{borderRadius:'50%',background:'transparent',color:'#3c44b1',border:'none',boxShadow:'none'}}> 
                                
                                <Row >
         <div >
                 <Card className="filter-card" >

                
                    <Card.Body className="filter-body" style={{width:'15rem',padding:'0rem'}}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle  eventKey="0" onClick={() => setOpen1(!open1)}>
                                    <div className="accordion-header"><h6>Price</h6><FontAwesomeIcon style={{color:open1?"red":"#3b44c1"}} icon={open1?faChevronCircleRight:faChevronCircleDown} /></div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                   Hello
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                           
                            </Accordion>
                            <Accordion defaultActiveKey="1">

                            <Card>
                            <Accordion.Toggle  eventKey="1" onClick={()=>setOpen2(!open2)}>
                                    <div className="accordion-header"><h6>Column</h6><FontAwesomeIcon style={{color:open2?"red":"#3b44c1"}} icon={open2?faChevronCircleRight:faChevronCircleDown}/></div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Row><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox" checked={isManfacturer} onChange={()=>setIsManufacturer(!isManfacturer)}/><h6>Manfacturer</h6></Col><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox" checked={isRating} onChange={()=>setIsRating(!isRating)}/><h6>Rating</h6></Col></Row>
                                    <Row><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox" checked={isPrice} onChange={()=>setIsPrice(!isPrice)}/><h6>Price</h6></Col><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox" checked={isStock} onChange={()=>setIsStock(!isStock)}/><h6>Stock</h6></Col></Row>
                                   
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            <Accordion defaultActiveKey="2">

                            <Card>
                            <Accordion.Toggle  eventKey="2" onClick={()=>setOpen3(!open3)}>
                                    <div className="accordion-header"><h6>Brand</h6><FontAwesomeIcon style={{color:open3?"red":"#3b44c1"}} icon={open3?faChevronCircleRight:faChevronCircleDown}/></div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Row><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>Samsung</h6></Col><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>Motorola</h6></Col></Row>
                                    <Row><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>Apple</h6></Col><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>Nokia</h6></Col></Row>
                                    <Row><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>Google</h6></Col><Col style={{display:'flex',paddingBottom:'.3rem'}} sm={6}><input style={{marginRight:'.3rem'}} type="checkbox"/><h6>JBL</h6></Col></Row>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            <Accordion defaultActiveKey="5">

                            <Card>
                            <Accordion.Toggle  eventKey="3" onClick={()=>setOpen4(!open4)}>
                                    <div className="accordion-header"><h6>Order</h6><FontAwesomeIcon style={{color:open4?"#3b44c1":"red"}} icon={open4?faChevronCircleDown:faChevronCircleRight}/></div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', alignItems:'center'}}>
                                        <div className="asending" style={{marginBottom:'.6rem',display:'flex',alignItems:'center',cursor:'pointer'}}><a><FontAwesomeIcon style={{color:'#3b44c1'}} icon={faArrowAltCircleUp}/><h7>Ascending</h7></a></div>
                                        <div className="desending" style={{display:'flex',alignItems:'center',cursor:'pointer'}}><FontAwesomeIcon style={{color:'red'}} icon={faArrowAltCircleDown}/><h7>Decending</h7></div>
                                    </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
   
                </Card.Body>   
                           
                         
                           </Card>
                           </div>
         </Row>    
                                </DropdownButton>
                          </div>
                          {/* <FontAwesomeIcon icon={f}/> */}
                   </div>
                   {/* <Row style={{width:'93%'}}>
                      
                       <Col sm={1}></Col>
                       <Col sm={2}>Manufac..</Col>
                       <Col sm={2}>Manufac..</Col>
                       <Col sm={2}>Manufac..</Col>
                       <Col sm={2}></Col>
                   </Row> */}
                  </Card.Header>
                  <div className="title" style={{height:'2rem',marginLeft:'11rem'}}>
                    <Row style={{padding:'.5rem 0',fontWeight:'bold',color:'#3b44c1'}}>
                            {/* <Col xs={2}></Col> */}
                            <Col style={{display:isManfacturer?"block":"none"}} className='product-col' xs={2}>By</Col>
                            <Col style={{display:isRating?"block":"none"}} className='product-col' xs={1}>Rating</Col>
                            <Col style={{display:isPrice?"block":"none"}} className='product-col' xs={1}>Price</Col>
                            <Col style={{display:isStock?"block":"none"}} className='product-col' xs={2}>Stock</Col>
                            <Col  className='product-col' xs={3}></Col>

                    </Row>
                </div>
                 <Card.Body className='productListBody overflow-auto custom-scrollbar-css '>



                 {/* to={`products/${product.id}`} */}
            <p>{products.length!==0?Search(products).map((product,id)=>(
                
                <div className="product-card-indentical" style={{color:'black',display:'flex',alignItems:'center',border:'1px solid #dee2e6',margin:'.5rem'}}>
             {/* <Checkbox
             number={id}
             isChecked={false}
             /> */}
              <div style={{marginLeft:'1rem',marginTop:'2rem'}} className="checkBocAll">
              
                   
             <input
                style={{display:'none'}}
                className="singleCheckBox"
                id={id}
                type="checkbox"
                name={product.id}
                value={product.id}
                checked={state.checkedBoxes.includes(product.id)}
                onChange={(e) => handleCheck(e, product)}
            
        /><label for={id}>
        <div id="tick_mark"></div>
      </label></div>
            <Media key={product.id} 
                    style={{padding:'.5rem',flex:'1'}} className={styles.mediaItem}>
                           <NavLink to={{
                    pathname:`products/${product.id}`,
                    state: {item:product}  
                  }} >
                      
                       <img
                                width={100}
                                height={100}
                                className="align-self-center mr-3"
                                src={product.img?product.img:"https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"}
                                alt="Generic placeholder"
                            />
                      </NavLink>
                            
                            <Media.Body className={styles.mediaBody}>
                            <NavLink to={{
                    pathname:`products/${product.id}`,
                    state: {item:product}  
                  }} > <p><b>{product.name}</b></p></NavLink>
                                <Row  className='product-row'>
                                <Col style={{display:isManfacturer?"block":"none"}} className='product-col' xs={2}>
                                    <strong>By:</strong>{product.manufacturer}
                                </Col>
                                <Col style={{display:isRating?"block":"none"}} className='product-col' xs={1}><b>4.5</b>/5</Col>
                                <Col style={{display:isPrice?"block":"none"}} className='product-col' xs={1}>
                                    <strong>₹{product.price}</strong>
                                </Col>
                                <Col style={{display:isStock?"block":"none"}} className='product-col' xs={2}><strong>Stock</strong>{product.stock}</Col>
                                
                                <Col xs={3} style={{minWidth:'10rem'}}>
                                    <div className='action-button'>

                                    <EditModal1 product={product}/>
                                    
                                    <div>
                                        <OverlayTrigger
                                            placement="right"
                                            overlay={<Tooltip id="button-tooltip-2">Delete</Tooltip>}>
                                                
                                            <Button variant="danger" onClick={()=>deleteItem(product.id)} size="sm">
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </Button>
                                        </OverlayTrigger>
                                    </div>

                                    </div>
                                </Col>
                                </Row>                              
                            </Media.Body>
                            </Media></div> )):null}
                           
                </p>    
                </Card.Body>   
                           
                         
                           </Card>
                           </div>
                           </Col>
                          
        </>
    )
}

export default connect(null,{deleteItem,deleteSelectedItem})(OrderList);