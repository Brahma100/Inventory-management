import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { loadUser } from "./action/authActions";
import Home from './components/auth/Home';
import Products from './components/Products/Products';
import { BrowserRouter } from 'react-router-dom';


export default class MainApp extends Component {
    
    componentDidMount(){
   
        store.dispatch(loadUser());
        // console.log("Store_data",store.getState().auth); 
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
