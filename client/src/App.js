import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Shoppinglist from './components/Shoppinglist';
import { Provider, connect } from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';
import {Container,Spinner} from 'reactstrap';
import { loadUser,loginModalOpen } from "./action/authActions";
import Bodycopy from './components/Bodycopy';
import Test from './components/Test';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import AdminNavbar from './components/Navbars/AdminNavbar';
import  Dashboard  from './components/views/Dashboard.js';
import { Route, Switch,Redirect ,withRouter} from "react-router-dom";
import NotificationSystem from "react-notification-system";
import routes from "./routes.js";
import Test1 from './components/Test1';
import { style } from "./components/Variables/Variables";
import image from "./assets/images/sidebar-3.jpg";
import { getItems } from './action/itemAction';
import Home from './components/auth/Home';
import back from './assets/images/back.jpg'
import { getCategories } from './action/categoryAction';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open",
      isModalOpen:false,
    };
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
          exact
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  
  componentDidMount(e){
    
    store.dispatch(loadUser());
    store.dispatch(getCategories());
    
    if(this.props.history.action==='POP')
    {
        setTimeout(()=>{
        console.log("timeout");
        if(!this.props.isAuthenticated){
          this.props.history.push('/')
          this.props.loginModalOpen(true);
        }
      },150)
    }
    else if(!this.props.isAuthenticated){
      console.log("Direct");
      this.props.history.push('/')
      this.props.loginModalOpen(true);
     }
   
  }
  componentDidUpdate(e){
  
    store.dispatch(loadUser());
   if(!this.props.isAuthenticated){
    this.props.history.push('/')
    this.props.loginModalOpen(true);
   }
  }

  render(){
    return (

    
      <div className="wrapper">
              <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
      {/* <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        
        <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>

        <div id="main-panel" className="main-panel" ref="mainPanel">
        
          
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div> */}

      {/* <AppNavbar isModalOpen={this.state.isModalOpen}/> */}
      <AdminNavbar
            {...this.props} routes={this.getRoutes(routes)}
            brandText={this.getBrandText(this.props.location.pathname)}
          />

            
            <Switch>{this.getRoutes(routes)}</Switch>
            <Container>

            {/* {store.getState().auth.isLoaded?<>{store.getState().auth.isAuthenticated ?<Dashboard/>:<Spinner style={{ width: '3rem', height: '3rem', color:'green' }} type="grow" />}</>
               :<Home/>
               } */}
            </Container>
            {/* <Container>
              <Bodycopy isModalOpen={this.state.isModalOpen}/>
            </Container> */}
            {/* <Container>
              <Test1/>
            </Container>
            <Container>
           
              <Dashboard/>
              
            </Container> */}

          
          </div>
         
      </div>
    );  
 }}
 const mapStateToProps=state=>{
  return({
    isAuthenticated:state.auth.isAuthenticated,
  })
 }

export default connect(mapStateToProps,{loginModalOpen})(withRouter(App));
