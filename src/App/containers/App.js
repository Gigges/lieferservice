import React from 'react';
import { Button, Card,Navbar,Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar'
import '../../App.css';
import Meals from "./Meals"
import Cart from '../containers/cart'
//import {} from "../actions/"
import {BrowserRouter, NavLink,Switch, Route} from 'react-router-dom'
import { addToCart } from '../actions/cartActions';
import store from "../store"

class App extends React.Component {
  render() {return (
    //Router for Navigation 
    <BrowserRouter>
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={Meals}/>
        <Route exact path="/shop" component={Meals}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
     
  </div>
    
     
    
    </BrowserRouter>

  
   

    )


  }
}

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      ADD_TO_CART: (id) => {dispatch(addToCart(id))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
