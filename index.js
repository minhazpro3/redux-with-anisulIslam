
const INCREMENT = "INCREMENT"
const  DECREMENT = "DECREMENT"
const  ADD_USER = "ADD_USER"

// store
const initialCounterState ={
    count:0
}
const initialUserState ={
   user:[{name:"minhaz"}]
}

// action is a object there is a two important jinishe. which type, if you want to pass data you can use payload
//  INCREMENT COUNTER

    const incrementCounter = ()=>{

      return  {
            type: INCREMENT
        }
    }

// DECREMENT COUNTER
const decrementCounter = ()=>{

    return  {
          type: DECREMENT
      }
  }
//   ADD_USER
// const addUser = ()=>{

//     return  {
//           type: ADD_USER,
//          payload:{name:"mehidy"} 
//       }
//   }

// create reducer for counter

const counterReducer = (state=initialCounterState,action)=>{
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

            default :
            state;

    }
}