import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { loadUser } from "./action/authActions";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { BrowserRouter } from 'react-router-dom';
import ReactGa from 'react-ga';
export default class MainApp extends Component {
    
    componentDidMount(){
            ReactGa.initialize('G-1QHM2PH8BT');
            ReactGa.pageview('/')
            store.dispatch(loadUser());
      }
    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                
                    <Switch>
                        <Route exact path="/">
                            
                            <Home/>
                        </Route>
                        <Route exact path="/productsGrid" component={Products}>
                            <Products/>
                        </Route>
                        <Route path="/admin" render={props => <App {...props}/>}/>
                        <Redirect from="/admin" to="/admin/dashboard"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
