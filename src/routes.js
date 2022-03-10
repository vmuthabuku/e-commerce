import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import Products from './Products/Products'
// import Wrapper from './Header/Wrapper'

const Routes = () => {
    return (
    <BrowserRouter>
      <Switch>
     
      <Route path="/" component={App} exact/>
        {/* <Route path="/product/:id" component={Auth} /> */}
        <Route path="/products" component={Products} exact/>
       <Redirect from="*" to="/" />   

      
             
      </Switch>
    </BrowserRouter> 
      
    );
}

export default Routes;
