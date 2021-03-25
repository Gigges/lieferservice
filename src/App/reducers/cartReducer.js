import {addToCart} from '../actions/cartActions'



const cartReducer= (state,action) => {
   
    //INSIDE HOME COMPONENT
        if(action.type === 'ADD_TO_CART'){
            let addedItem = state.items.find(item=> item.id === action.id)
            
            //check if the action id exists in the addedItems
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
              //calculating the total
              let newTotal = state.total + addedItem.price 
              console.log(state.addedItems)
             
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
              
              
          }
      }
      else{
          console.log(action)
          console.log(state.addedItems)
          return state
      }
    }

export default cartReducer;