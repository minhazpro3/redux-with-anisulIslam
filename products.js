const { createStore, combineReducers } = require("redux");

// products constant
const GET_PRODUCTS = "GET_PRODUCT";
const ADD_PRODUCTS = "ADD_PRODUCT";
// cart constant
const   GET_CART_ITEMS= "GET_CART-ITEM"
const   ADD_CART_ITEMS= "ADD_CART_ITEMS"




// CART STATE
const initialStateCart = {
    cart:["pant"],
    numberOfCart: 1
}





// PRODUCT STATE
const initialStateProduct = {
  products: ["mango"],
  numberOfProduct: 1,
};





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






// product action 
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};






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





// product reducers
const productReducers = (state = initialStateProduct, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
     return state;
  }
};

// create combine reducer
const rootReducer = combineReducers({
    productR:productReducers,
    cartR:cartReducers
})


// store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCart());
store.dispatch(addCart("javascript"));

store.dispatch(getProducts());
store.dispatch(addProducts("kamala"));








// cart reducers
