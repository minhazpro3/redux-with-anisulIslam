const { createStore,applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

// cart constant
const   GET_CART_ITEMS= "GET_CART-ITEM"
const   ADD_CART_ITEMS= "ADD_CART_ITEMS"



// CART STATE
const initialStateCart = {
    cart:["pant"],
    numberOfCart: 1
}




// cart action
const getCart = ()=>{
    return{
        type: GET_CART_ITEMS
    }
}

const addCart = (cartItem)=>{
    return {
        type: ADD_CART_ITEMS,
        payload: cartItem
    }
}




// cart reducers

const cartReducers = (state=initialStateCart, action)=>{
    switch (action.type) {
        case GET_CART_ITEMS:
         return{
             ...state
         }
        case ADD_CART_ITEMS:
         return{
             cart: [...state.cart, action.payload],
             numberOfCart: state.numberOfCart + 1
         }
    
        default:
          return  state;
    }
}


// store
const store = createStore(cartReducers,applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCart());
store.dispatch(addCart("javascript"));
