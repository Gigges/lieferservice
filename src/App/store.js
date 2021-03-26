
import {createStore,combineReducers,applyMiddleware} from "redux"; //import store stuff from redux
import logger from 'redux-logger'
import cartReducer from './reducers/cartReducer'
const initState = {
    items: [
        {
            "id": "1",
            "name": "Pizza",
            "price": 8.5,
            "text": "Pizza mit Tomatensoße und Käse",
    
        },
        {
            "id": "2",
            "name": "Pasta",
            "price": 9.0,
            "text": "Pasta mit Bolognese Soße",
    
    
        },
        {
            "id": "3",
            "name": "Steak",
            "price": 15,
            "text": "Steak mit Pommes",
    
        },
        {
            "id": "4",
            "name": "Lasagne",
            "price": 11,
            "text": "Hausgemachte Lasagne",
    
        },
        {
            "id": "5",
            "name": "Döner",
            "price": 5.0,
            "text": "Döner Kebap vom Spieß",
    
        },
        {
            "id": "6",
            "name": "Pommes",
            "price": 3.5,
            "text": "Pommes",
    
        },
    
    
    ],
    addedItems:[],
    total:0
}

//save store to local storage to survive reload/navigation
function saveToLocalStorage(state) {
    try {
        const storedState = JSON.stringify(state);
        localStorage.setItem("state",storedState);
    } catch(e) {
        console.log(e);
    }
}
//load previously saved state to store
function loadFromLocalStorage(){
    console.log("load?")
    try{
    const storedState = localStorage.getItem("state");
    if (storedState === null) return initState
    return JSON.parse(storedState)
} catch(e) {
    console.log(e)
    return initState
}
}

const persistedState = loadFromLocalStorage();

//create redux store, with saved state & redux devtools
const store = createStore(cartReducer,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//save store state to disk on every change
store.subscribe((state) =>{
    saveToLocalStorage(store.getState())
}
)

export default store
