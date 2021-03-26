import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Meal from '../components/Meal'
import Store from '../store'
import CartEntry from '../components/CartEntry'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class Cart extends Component{

    render(){
         let ordered=[]
         //display a Cart Entry for every added Item
        return (
            <>
            <ListGroup>
            {this.props.items.map((order) => {
                console.log(order.name)
                return <CartEntry key={order.id*Math.random()*10000} item={order} quantity={order.quantity}/>
                })
            }
            <ListGroupItem>  </ListGroupItem>
            <ListGroupItem>Gesamt {this.props.total}€</ListGroupItem>
            </ListGroup>
            </>

        )
        }   

    }
      
const mapStateToProps = (state)=>{
   console.log(state.addedItems)
        
    return{
     items: state.addedItems,
     total: state.total
    }
}


export default connect(mapStateToProps)(Cart)