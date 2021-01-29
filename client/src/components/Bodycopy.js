import React, { Component } from 'react';
import { Media,CardSubtitle, Spinner, Row, Container, Col, Card, CardBody, Button, CardTitle, CardText, CardImg, CardLink} from 'reactstrap';
import {connect} from 'react-redux';

import EditModal1 from './auth/EditModal1'
import E2 from './auth/E2';
import EditModal from './auth/EditModal'
import { getItems,deleteItem } from "../action/itemAction";
import Body2 from './auth/Body2';
import Pagination from './Pagination';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import ProductList from './ProductsList/ProductList';


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

class Bodycopy extends Component {
  state = {
    products: this.props.products,
    pageOfItems: [],
    Index1:0,
    Index2:8,

  };
  

  componentDidMount(){
 this.props.getItems()
    this.setState({products:this.props.products})
 
    // console.log("ProductS",this.props.products)
    // console.log("Products:",this.props.products);
  }
  componentDidUpdate(){
//  this.props.getItems()
    // this.setState({products:this.props.products})
 
    // console.log("ProductSU",this.state.products)
    // console.log("Products:",this.props.products);
  }
  handleView=()=>{
    if(!this.props.isAuthenticated){
      
    }
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });

}

  
    render(){
      
      const maxlimit=100;
      var products=this.props.products;
      
      products=products.slice(this.state.Index1,this.state.Index2)
     
    
        return (
            <div>
            <ProductList/>
                            
            
            </div>
          );
    }
  
};
const mapStateToProps= state=>{
    return({
        isAuthenticated:state.auth.isAuthenticated,
        isLoading:state.auth.isLoading,
        user:state.auth.user,
        products:state.item.items,
        itemsLoading:state.item.itemsLoading,
        itemsLoaded:state.item.itemsLoaded
        // error:state.error
    })
}


export default connect(mapStateToProps,{getItems,deleteItem})(Bodycopy);