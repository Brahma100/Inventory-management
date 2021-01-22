import React, { Component } from 'react';
import {connect} from 'react-redux';
import EditModal from './auth/EditModal'
class Body extends Component {
 
    render(){
        return (
            <div>
                {this.props.isAuthenticated?
                <>
                <EditModal/>
                </>:null
              }
              
            </div>
          );
    }
  
};
const mapStateToProps= state=>{
    return({
        isAuthenticated:state.auth.isAuthenticated,
    })
}


export default connect(mapStateToProps,null)(Body);