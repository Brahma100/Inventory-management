import React,{Component} from 'react';
import { Button,InputGroup,Col,Alert,NavLink, Modal,Form } from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register,login,TokenExpireExtend,loginModalOpen,isBlockedF} from '../../action/authActions';
import {clearErrors}  from '../../action/errorActions';
import {Formik} from 'formik';
import * as yup from 'yup';
import back from '../../assets/images/back.jpg';


const schemaLogin = yup.object({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(0, 'Password must be at least 6 characters').max(24, 'Password can be maximum 24 characters').required()
})

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schemaRegister = yup.object({
    fname:yup.string().min(1, 'At least 1 characters').max(10, 'First Name can be maximum 10 characters').required(),   
    lname:yup.string().min(1, 'At least 1 characters').max(10, 'Last Name can be maximum 10 characters').required(),   
    city:yup.string().min(3, 'City must be at least 3 characters').max(24, 'City can be maximum 20 characters'),   
    state:yup.string().min(3, 'State must be at least 3 characters').max(24, 'State can be maximum 20 characters'),   
    country:yup.string().min(3, 'Country must be at least 3 characters').max(24, 'Country can be maximum 20 characters'),   
    postal:yup.number().integer(),   
    email: yup.string().email('Invalid email').required(),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(24, 'Password can be maximum 24 characters').required(),
    // mobile_number:yup.number().max(9999999999,'Invalid Number').required()//.matches(phoneRegExp,"Number is Not Like Mobile number"),   
})



class RegisterModal extends Component{
    state={
        imageURL:"",
        signIn:false,
        remember:false,
        modal:this.props.isModalOpen,   // modal for adding item is false initially
        msg:null,
        city:'',
        State:'',
        country:'',
        postal:'',
        ip:'',
        isBlocking:this.props.isBlocked
    };


async componentDidMount(){

    let response=await fetch(`https://geolocation-db.com/json/`)
    let ipData=await response.json();
    
    this.setState({ip:ipData.IPv4,city:ipData.city,country:ipData.country_name,postal:ipData.postal,State:ipData.state})

    
}


    componentDidUpdate(prevProps){

        console.log(this.state.city);

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
        this.props.clearErrors();
        this.setState((prevState)=>{
            return {signIn:!prevState.signIn}
        })
    }
     encodeImageFileAsURL=()=> {
        console.log("image uploading func. called");
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = (fileLoadedEvent)=> {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
    
            var newImage = document.createElement('img');
            newImage.src = srcData;
            this.setState({imageURL:newImage.src});
            // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            // console.log("Converted Base64 version is " + this.state.imageURL);
           
          }
          fileReader.readAsDataURL(fileToLoad);
        }
        // return newImage.src;
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
               <Button style={{paddingLeft:' 1.5rem',paddingRight:'1.5rem'}}><b> Register</b></Button>
            </NavLink>

            <Modal show={this.state.modal} onHide={this.toggle} >
            {this.state.signIn?           <>
            {/* <Modal.Header toggle={this.toggle}>Register</Modal.Header> */}
                <Modal.Header  style={{color:'white', backgroundImage: `url("${back}")`,backgroundSize:'32rem',backgroundRepeat:'no-repeat'}} closeButton ><b>Register</b></Modal.Header>
                <Modal.Body>
    {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
    <p>isBlocking?{this.state.isBlocking?"Yes":"No"}</p>
   
    <Formik
    // validator={() => ({})}
      validationSchema={schemaRegister}
      initialValues={{
        fname:'',
        lname:'',
        email:'',
        password:'',
        city:this.state.city,
        state:this.state.State,
        postal:this.state.postal,
        country:this.state.country,
        // mobile_number:''

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
            <Form.Row>
            <Form.Group as={Col} md="12">
                <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Profile Image </Form.File.Label>
                    <input id="inputFileToLoad"  type="file" onChange={this.encodeImageFileAsURL} />
                    </Form.File>
                </div>
            </Form.Group>

          </Form.Row>

          {/* <Form.Row>
          <Map
                google={this.props.google}
                center={{lat: 18.5204, lng: 73.8567}}
                height='300px'
                zoom={15}
    />
          </Form.Row>
          <Form.Row>
         
          </Form.Row>
          <Form.Row>
         
          </Form.Row>
          <Form.Row style={{marginBottom:'10rem'}}>
         <p>Hello</p>
          </Form.Row> */}
          <Button type="submit">Register</Button>
          
          <input defaultChecked={this.state.remember} style={{marginLeft:'1rem',marginTop:'.5rem'}} type="checkbox" onChange={this.handleCheckboxChange}/><span>  Remember me!</span>
                            <div style={{}} className="forgot-password text-right">
                                Already registered <span onClick={this.handleSignIn} ><a ><b>Sign in?</b></a></span>
                            </div>
                            <div id="imgTest"></div>
                        </Form>
                        
                    )}
                    </Formik>
                </Modal.Body>            </>:
                <>
                <Modal.Header  style={{color:'white', backgroundImage: `url("${back}")`,backgroundSize:'32rem',backgroundRepeat:'no-repeat'}} closeButton ><b>Login</b></Modal.Header>
                    <Modal.Body>
                      {this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}
                       
                       
                 <Formik
                        validationSchema={schemaLogin}
                        initialValues={{
                            email:'',
                            password:'',

                        }}
                        onSubmit={(values)=>{ 
                            console.log("onSUbmit");
                        const {email,password}=values;
                        console.log("On Submit Called",email);
                        const user={
                            email,password
                        }
                        this.props.login(user);
                        }
                        }
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            errors,
                            touched
                            }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                            
                            
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
                                    onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                                    isInvalid={!!errors.email}
                                    />
                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                    {touched.email && errors.email}
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
                                    onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                                    isInvalid={!!errors.password}
                                />
                                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {touched.password && errors.password}
                                </Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>
                            {/* <Form.Group>
                                <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={e=>{this.setState({isBlocking:e.target.value.length>0}); handleChange(e)}}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                                />
                            </Form.Group> */}
                            <Button type="submit">Login</Button>
                            <input defaultChecked={this.state.remember} style={{marginLeft:'1rem',marginTop:'.5rem'}} type="checkbox" onChange={this.handleCheckboxChange}/><span>  Remember me!</span>
                                                    <div style={{marginTop:'1rem',}} className="forgot-password text-right">
                                                    Don't have an account?  <span onClick={this.handleSignIn} ><a ><b>Create an Account</b></a></span>
                                    </div> 
                            </Form>
                        )}
                        </Formik>
                </Modal.Body>
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
        isBlocked:state.auth.isBlocked,
        isAuthenticated:state.auth.isAuthenticated,
        rememberMe:state.auth.rememberMe,
        error:state.error
    })
}


export default connect(mapStateToProps,{loginModalOpen,isBlockedF,login,register,clearErrors,TokenExpireExtend})(RegisterModal);