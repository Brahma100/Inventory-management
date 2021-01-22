import React,{Component} from 'react';
import { Alert,NavLink, Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Label, Input, Collapse } from 'reactstrap';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../action/authActions';
import {clearErrors}  from '../../action/errorActions';

// import e from 'express';

class RegisterModal1 extends Component{
    state={
        modal:false,   // modal for adding item is false initially
        name:'',
        email:'',
        password:'',
        msg:null
    };
    componentDidUpdate(prevProps){
        const {error,isAuthenticated}=this.props;
        if(error!==prevProps.error){
            if(error.id==="REGISTER_FAIL"){
                this.setState({msg:error.msg.msg});
            }
            else{
                this.setState({msg:null});
            }
        }
        // if authenticated close Modal
        if(this.state.modal){
            
            if(isAuthenticated){
                this.toggle();
            }
        }
    }
    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    }

    toggle=()=>{  
        // clear the error
        this.props.clearErrors();
        // to toggle the modal 
        console.log(this.state.modal)
        this.setState({
            modal:!this.state.modal
        })
    }


    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    // On Submit  method 
    onSubmit=e=>{
        e.preventDefault();
        const {name,email,password}=this.state;
        const newUser={
            name,email,password
        }
        this.props.register(newUser);
        // this.props.addItem(newItem);
        // this.toggle();
    }

render(){
    return(
        <div>
            <NavLink onClick={this.toggle} href="#">
                Register
            </NavLink>

            <Modal isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Username"
                                onChange={this.onChange}
                            />
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Id"
                                onChange={this.onChange}
                            />
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={this.onChange}
                            />
                            <Button color="dark" style={{marginTop:'2rem'}} block>

                            Register</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}
}
const mapStateToProps= state=>{
    return({
        isAuthenticated:state.auth.isAuthenticated,
        error:state.error
    })
}


export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);