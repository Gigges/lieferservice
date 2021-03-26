import {addToCart} from '../actions/cartActions'



const cartReducer= (state,action) => {
   
     //handle add to cart action
        if(action.type === 'ADD_TO_CART'){
            let addedItem = state.items.find(item=> item.id === action.id)
           
           let exists_item= state.addedItems.find(item=> action.id === item.id)
           if(exists_item)
           {  
              addedItem.quantity += 1 
             
               return {
                ...state,
                 total: state.total + addedItem.price 
                  }
          }
           else{
              addedItem.quantity = 1;
              let newTotal = state.total + addedItem.price 
              console.log(state.addedItems)
             
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
              
              
          }
      }
      else{ //oo action, return previous state
          return state
      }
    }

export default cartReducer;