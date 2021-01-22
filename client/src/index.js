import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import "./assets/css/animate.min.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
// import "./assets/css/pe-icon-7-stroke.css";
import AppNavbar from './components/AppNavbar';
import Home from './components/auth/Home';
import MainApp from './MainApp';

ReactDOM.render(
  <MainApp/>
 ,
  document.getElementById('root')
);

