// state = count: 0
// action = increment,decrement, reset.
// reducers 
// store

const { createStore } = require("redux")


// constants
const INCREMENT = "increment"
const DECREMENT = "decrement"
const RESET = "reset"

const initState = {
    count: 0
}

const incrementAction = ()=>{
    return{
        type: INCREMENT
    }
}

const decrementAction = ()=>{
    return{
        type: DECREMENT
    }
}
const resetAction = ()=>{
    return{
        type: RESET
    }
}

// create reducers
const counterReducer = (state=initState, action)=>{
    switch (action.type) {
        case INCREMENT:
            
            return{
                ...state,
                count:state.count+1
            }
    
        case DECREMENT:
            
            return{
                ...state,
                count:state.count-1
            }
        case RESET:
            
            return{
                ...state,
                count:0
            }
    
        default:
            state;
    }
}

// create store
const storesssssss = createStore(counterReducer)

storesssssss.subscribe(()=>{
    console.log(storesssssss.getState());
})

storesssssss.dispatch(incrementAction())
storesssssss.dispatch(incrementAction())
storesssssss.dispatch(incrementAction())
storesssssss.dispatch(decrementAction())
storesssssss.dispatch(resetAction())