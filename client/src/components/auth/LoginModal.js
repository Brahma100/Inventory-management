import React,{Component} from 'react';
import {Col, Alert,NavLink, Button, Modal,Form,FormGroup,Label, Input, InputGroup} from 'react-bootstrap';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../action/authActions';
import {clearErrors}  from '../../action/errorActions';
import {Formik} from 'formik';
import * as yup from 'yup';
import back from '../../assets/images/back.jpg';

// import e from 'express';
const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required(),
  });
class LoginModal extends Component{
    state={
        modal:false,   // modal for adding item is false initially
        email:'',
        password:'',
        msg:null
    };
    componentDidUpdate(prevProps){
        const {error,isAuthenticated}=this.props;
        if(error!==prevProps.error){
            if(error.id==="LOGIN_FAIL"){
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
        login:PropTypes.func.isRequired,
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
        const {email,password}=this.state;
        const user={
            email,password
        }
        this.props.login(user);
    }

render(){
    return(
        <div>
            <NavLink onClick={this.toggle} href="#">
                Login
            </NavLink>

            <Modal show={this.state.modal} onHide={this.toggle} >
                <Modal.Header  style={{color:'white', backgroundImage: `url("${back}")`,backgroundSize:'32rem',backgroundRepeat:'no-repeat'}} closeButton ><b>Login</b></Modal.Header>
                <Modal.Body>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}





    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>




















                    {/* <Form onSubmit={this.onSubmit}>
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
                            </Col>
                            
                        </FormGroup>
                    </Form> */}
                </Modal.Body>

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


export default connect(mapStateToProps,{login,clearErrors})(LoginModal);