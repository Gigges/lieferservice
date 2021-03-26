import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Meal from '../components/Meal'
import NavigationBar from '../components/NavigationBar'
import pizza from '../../pics/pizza.jpg'
import pasta from '../../pics/pasta.jpg'
import steak from '../../pics/steak.jpg'
import lasagne from '../../pics/lasagne.jpg'
import döner from '../../pics/döner.jpg'
import { BrowserRouter, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'

class Meals extends React.Component {
    render() {

        const handleClick = (id) => {
            this.props.addToCart(id);
        };

       
        //get the added items from redux
        let items = this.props.addedItems;
        return (
            //return a Meal item for every item in the store
            <>
            
                {items.map((meal) => {
                    return <Meal key={meal.id} meal={meal} img={meal.image} onClick={() => {handleClick(meal.id) }} />
                })}

            </>

        )


    }


}


//save store state into props
const mapStateToProps = (state) => {
    return { 
        addedItems : state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { 
            dispatch(addToCart(id)) }
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Meals)
