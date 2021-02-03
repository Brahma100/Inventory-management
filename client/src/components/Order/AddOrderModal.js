import React,{Component} from 'react';
import { Button,InputGroup,Col,Alert,NavLink, Modal,Form } from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register,login,TokenExpireExtend,loginModalOpen,isBlockedF} from '../../action/authActions';
import {clearErrors}  from '../../action/errorActions';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Prompt} from 'react-router-dom';
import back from '../../assets/images/back.jpg';



const schemaRegister = yup.object({
    fname:yup.string().min(1, 'At least 1 characters').max(10, 'First Name can be maximum 10 characters').required(),   
    lname:yup.string().min(1, 'At least 1 characters').max(10, 'Last Name can be maximum 10 characters').required(),   
    city:yup.string().min(3, 'City must be at least 3 characters').max(24, 'City can be maximum 20 characters'),   
    state:yup.string().min(3, 'State must be at least 3 characters').max(24, 'State can be maximum 20 characters'),   
    country:yup.string().min(3, 'Country must be at least 3 characters').max(24, 'Country can be maximum 20 characters'),   
    postal:yup.number().integer(),   
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(24, 'Password can be maximum 24 characters').required(),
       
})



class AddOrderModal extends Component{
    state={
       
        modal:false,   // modal for adding item is false initially
        msg:null,
        city:'',
        State:'',
        country:'',
        postal:'',
        ip:'',
        isBlocking:this.props.isBlocked
    };


    componentDidUpdate(prevProps){

        console.log("Add Order Called");
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
        // if(this.state.modal){
            
        //     if(isAuthenticated){
        //         this.toggle();
        //     }
        // }
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
        console.log("Toggle:",this.state.modal);
        
    }





render(){
    return(
        <div>
          {/* <Prompt
              when={this.state.isBlocking}
                message={(location, action) => {
                  // if (action === 'POP') {
                    console.log("Backing up...",action,location)
                  // }

                  return location.pathname.startsWith("/")
                    ? true
                    : `Are you sure you want to Leave ${location.pathname}?`
            }}
          /> */}
             {/* <Prompt
                when={this.props.isBlocked}
                message={(location)=> `Are You Sure Want To Leave ${location}`}
/>  */}
            <NavLink onClick={this.toggle} >
               <Button  style={{paddingLeft:' 1.5rem',paddingRight:'1.5rem'}}><b>Add Order</b></Button>
            </NavLink>

            <Modal show={this.state.modal} onHide={this.toggle} >
                <Modal.Header  style={{color:'white', backgroundImage: `url("${back}")`,backgroundSize:'32rem',backgroundRepeat:'no-repeat'}} closeButton ><b>Add Order</b></Modal.Header>
                <Modal.Body>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
   
    <Formik
      validationSchema={schemaRegister}
      initialValues={{
        fname:'',
        lname:'',
        email:'',
        password:'',
      

      }}
      onSubmit={(values)=>{ 
        this.encodeImageFileAsURL();
        const imageURL=this.state.imageURL;
        console.log("Image URL",imageURL);
        const {fname,lname,email,password,city,state,postal,country}=values;
        let img=this.state.imageURL;
        let ip=this.state.ip;
        const newUser={
            fname,lname,email,password,img,city,state,postal,country,ip
        }
        this.props.register(newUser);
    }
    }
    >
       
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
         }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik01">
           
              <Form.Label>First Name</Form.Label>
              
              <Form.Control
                type="text"
                placeholder="First Name"
                name="fname"
                value={values.fname}
                // onChangeCapture={(e)=>this.setState({isBlocking:e.target.value>0})}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); this.props.isBlockedF(e.target.value.length>0); handleChange(e)}}
                isInvalid={!!errors.fname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lname"
                value={values.lname}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); this.props.isBlockedF(e.target.value.length>0);handleChange(e)}}
                isInvalid={!!errors.lname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lname}
              </Form.Control.Feedback>
            </Form.Group>
           

          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label>Email ID</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Email ID"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={e=>{this.setState({isBlocking:e.target.value.length>0});this.props.isBlockedF(e.target.value.length>0); handleChange(e)}}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0});this.props.isBlockedF(e.target.value.length>0); handleChange(e)}}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

          </Form.Row>
         
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city?values.city:this.state.city}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>State</Form.Label>
              <Form.Control
               disabled
                type="text"
                placeholder="State"
                name="state"
                value={values.state?values.state:this.state.State}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Postal</Form.Label>
              <Form.Control
             
                type="number"
                placeholder="Postal"
                name="postal"
                value={values.postal?values.postal:this.state.postal}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                isInvalid={!!errors.postal}
              />
              <Form.Control.Feedback type="invalid">
                {errors.postal}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Country</Form.Label>
              <Form.Control
               disabled
                type="text"
                placeholder="Country"
                name="country"
                value={values.country?values.country:this.state.country}
                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Phone/Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                value={values.mobile_number}
                onChange={handleChange}
                isInvalid={!!errors.mobile_number}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobile_number}
              </Form.Control.Feedback>
            </Form.Group> */}

          </Form.Row>
           

          <Button type="submit">Add Order</Button>
          
                        </Form>
                        
                    )}
                    </Formik>
                </Modal.Body>          

            </Modal>
        </div>
    );
}
}
const mapStateToProps= state=>{
    return({
        isModalOpen:state.auth.isModalOpen,
        isBlocked:state.auth.isBlocked,
        isAuthenticated:state.auth.isAuthenticated,
        rememberMe:state.auth.rememberMe,
        error:state.error
    })
}


export default connect(mapStateToProps,{loginModalOpen,isBlockedF,login,register,clearErrors,TokenExpireExtend})(AddOrderModal);