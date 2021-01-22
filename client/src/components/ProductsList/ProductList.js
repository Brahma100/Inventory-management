import React, { useState,useEffect } from "react";
import './ProductList.css'
import { Card,Container, Row, Col,Button,Media,Form,Tooltip } from "react-bootstrap";
import {connect} from 'react-redux';
import { getItems } from './../../action/itemAction';
import ProductListData from './ProductListData';
// import P2 from './P2';
import Checkbox from "../CustomCheckbox/CustomCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";


function ProductList(props){
  // const [chkBox,setChkBox]=useState(false)
  const [products,setProducts]=useState([]);
  // const [q, setQ] = useState("");


//  const handleCheck=(e)=>{
//     if(e.target.checked)
//     setChkBox(true);
//     else
//     setChkBox(false);
//  }

 
  useEffect(()=>{
      setProducts(props.products);
  },[props.products]);


    return (
      
      <div className="content">
        <Container  fluid>
        
          <Row >
            <Col sm={12}>
            <div className='products'>
                 <Card  className='cardpt'>
                 <Card.Header className='header'><b>Trending Products</b><p>Explore All Top Viewed Products</p></Card.Header>
                 {/* <Card.Body className='overflow-auto custom-scrollbar-css p-3'>
                            </Card.Body>    */}
                           
                         
                  </Card>
             

            </div>
            </Col>
          </Row>
          <Row >
            
          

                      <ProductListData products={products}/>
            
                 
             

          
            
          </Row>

         
        </Container>
      </div>
    );
  }
const  mapStateToProps=(state)=>{
    return({
      products:state.item.items
    })
  }

export default connect(mapStateToProps,{getItems})(ProductList);
