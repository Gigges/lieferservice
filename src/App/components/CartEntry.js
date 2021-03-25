import React from 'react'
import {ListGroup} from 'react-bootstrap'

function cartEntry(props) {
    return (
        <div>
            <ListGroup.Item>{props.item.quantity}x {props.item.name}  {props.item.price*props.item.quantity}€ </ListGroup.Item>
        </div>
    )
}

export default cartEntry
