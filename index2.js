// state = count: 0
// action = increment,decrement, reset.
// reducers 
// store

const { createStore } = require("redux")


// constants
const INCREMENT = "increment"
const INCREMENTPAYLOAD = "incrementPayload"
const DECREMENT = "decrement"
const RESET = "reset"
const USER_ADD= "ADD_USER"




const initState = {
    users:["Minhaz"],
    count: 0
   
}



const incrementAction = ()=>{
    return{
        type: INCREMENT
    }
}


const incrementActionPayload = (value)=>{
    return{
        type: INCREMENTPAYLOAD,
        payload:value
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


const AddUsers = (user)=>{
    return{
        type: USER_ADD,
        payload: user
    }
}





// create reducers
const counterReducer = (state=initState, action)=>{
    switch (action.type) {
        case USER_ADD:
            return{
               users: [...state.users, action.payload],
                count: state.count + 1
            }
        case INCREMENTPAYLOAD:
            return{
                ...state,
                count: state.count + action.payload
            }

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

// storesssssss.dispatch(incrementAction())
// storesssssss.dispatch(incrementAction())
// storesssssss.dispatch(incrementAction())
// storesssssss.dispatch(decrementAction())
// storesssssss.dispatch(incrementActionPayload(20))
// storesssssss.dispatch(incrementActionPayload(20))
storesssssss.dispatch(AddUsers("Nazmul"))
storesssssss.dispatch(AddUsers("Nazmul"))
storesssssss.dispatch(AddUsers("Nazmul"))