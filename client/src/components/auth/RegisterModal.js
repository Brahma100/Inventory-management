import React,{Component} from 'react';
import { Col,Alert,NavLink, Modal, ModalHeader, ModalBody,Form,FormGroup,Label, Input, Collapse } from 'reactstrap';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register,login,TokenExpireExtend,loginModalOpen} from '../../action/authActions';
import {clearErrors}  from '../../action/errorActions';

// import e from 'express';


class RegisterModal extends Component{
    state={
        signIn:false,
        remember:false,
        modal:this.props.isModalOpen,   // modal for adding item is false initially
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
            else if(error.id==="LOGIN_FAIL"){
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

        this.setState({
            modal:!this.state.modal
        })
        // this.props.loginModalOpen(this.state.modal)
    }
    handleCheckboxChange=(e)=>{
        e.preventDefault();
        this.setState((prevState)=>{
            return {remember:!prevState.remember}
        })
        
    }

    handleSignIn=()=>{
        console.log("Sign in  Toggle Called",this.state.signIn);
        this.setState((prevState)=>{
            return {signIn:!prevState.signIn}
        })
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    // On Submit  method 
    onSubmitRegister=e=>{
        e.preventDefault();
        const {name,email,password}=this.state;
        const newUser={
            name,email,password
        }
        this.props.register(newUser);
        // this.props.addItem(newItem);
        // this.toggle();
    }
    onSubmitLogin=e=>{
        e.preventDefault();
        const {email,password}=this.state;
        const user={
            email,password
        }
        this.props.login(user);
        console.log("Check",this.state.remember)
        this.props.TokenExpireExtend({rememberMe: this.state.remember});
    }

render(){
    return(
        <div>
            <NavLink onClick={this.toggle} href="#">
               <Button style={{paddingLeft:' 1.5rem',paddingRight:'1.5rem'}}><b> Register</b></Button>
            </NavLink>

            <Modal isOpen={this.state.modal} toggle={this.toggle} >
            {this.state.signIn?           <>
            <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
                    <Form onSubmit={this.onSubmitRegister}>
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
                            <Button  style={{marginTop:'2rem'}} block>

                            Register</Button>
                            <input defaultChecked={this.state.remember} style={{marginLeft:'1rem',marginTop:'.5rem'}} type="checkbox" onChange={this.handleCheckboxChange}/><span>  Remember me!</span>
                            <div style={{}} className="forgot-password text-right">
                    Already registered <span onClick={this.handleSignIn} ><a href="#"><b>Sign in?</b></a></span>
                </div>
                        </FormGroup>
                    </Form>
                   
                </ModalBody>
            </>:<>
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                <ModalBody>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
                    <Form onSubmit={this.onSubmitLogin}>
                        <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Id"
                                onChange={this.onChange}
                            />
                        </Col>

                            
                        
                            <Label for="password" className="mt-2" sm={2}>Password</Label>
                            <Col sm={10}>
                            <Input
                            className="mt-2"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={this.onChange}
                            />
                            </Col>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button color="dark" style={{marginTop:'2rem'}} block>Login</Button>
                                <input defaultChecked={this.state.remember} style={{marginLeft:'1rem',marginTop:'.5rem'}} type="checkbox" onChange={this.handleCheckboxChange}/><span>  Remember me!</span>
                                <div style={{marginTop:'1rem',}} className="forgot-password text-right">
                                Don't have an account?  <span onClick={this.handleSignIn} ><a href="#"><b>Create an Account</b></a></span>
                </div> 
                            </Col>
                            
                            
                        </FormGroup>
                    </Form>
                </ModalBody>
            </>
            
 }
                

            </Modal>
        </div>
    );
}
}
const mapStateToProps= state=>{
    return({
        isModalOpen:state.auth.isModalOpen,
        isAuthenticated:state.auth.isAuthenticated,
        rememberMe:state.auth.rememberMe,
        error:state.error
    })
}


export default connect(mapStateToProps,{loginModalOpen,login,register,clearErrors,TokenExpireExtend})(RegisterModal);