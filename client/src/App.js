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

import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import AdminNavbar from './components/Navbars/AdminNavbar';
import { Route, Switch,Redirect ,withRouter} from "react-router-dom";
import routes from "./routes.js";
import image from "./assets/images/sidebar-3.jpg";
import { getCategories } from './action/categoryAction';
import { AnimatedSwitch } from 'react-router-transition';

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
    console.log("Action:",this.props.history);
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
     console.log("update Component");
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
                <AdminNavbar
                      {...this.props} routes={this.getRoutes(routes)}
                      brandText={this.getBrandText(this.props.location.pathname)}
                    />
  
                      
                <Switch>{this.getRoutes(routes)}</Switch>   
                <Container>

                </Container>          
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
