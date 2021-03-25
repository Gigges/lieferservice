import { render } from '@testing-library/react';
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import pizza from '../../pics/pizza.jpg'
import pasta from '../../pics/pasta.jpg'
import steak from '../../pics/steak.jpg'
import lasagne from '../../pics/lasagne.jpg'
import döner from '../../pics/döner.jpg'
import pommes from '../../pics/pommes.jpg'
const Meal = (props) => {



    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={getImage(props.meal.name)}></Card.Img>
                <Card.Title>  {props.meal.name}</Card.Title>
                <Card.Text>
                    {props.meal.text}
                </Card.Text>
                <Card.Text>
                    {props.meal.price}€
                </Card.Text>
                <Button variant="primary" onClick={props.onClick}>Zum Warenkorb</Button>
            </Card>
        </>
    )
}

function getImage(str) {
        switch (str) {
            case "Pizza": return(pizza);
            case "Pasta": return(pasta);
            case "Steak": return(steak);
            case "Lasagne": return(lasagne);
            case "Döner": return(döner);
            case "Pommes":return(pommes)
        
        }
    
}




export default Meal
