// async actions - api calling
// api url =https://jsonplaceholder.typicode.com/todos
// axios api

const { default: axios } = require("axios")
const { createStore,applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")
 


// constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST"
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS"
const GET_TODO_FAILED = "GET_TODO_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"

// state

const initialTodoState = {
    todo: [],
    isLoading: false,
    error:null
}

 

// actions

const getTodoRequest = ()=>{
    return{
        type: GET_TODO_REQUEST
    }
}

const getTodoSuccess = (success)=>{
    return {
        type: GET_TODO_SUCCESS,
        payload: success
    }
}

const getTodoError = (error)=>{
    return {
        type: GET_TODO_FAILED,
        payload: error
    }
}

// reducers

const todoReducers = (state=initialTodoState,action)=>{
    switch (action.type) {
        case GET_TODO_REQUEST:
           return {
            ...state,
            isLoading: true

           }

        case GET_TODO_SUCCESS:
           return {
            ...state,
            isLoading: false,
            todo: action.payload

           }
        case GET_TODO_FAILED:
           return {
            ...state,
            isLoading: false,
            error: action.payload

           }
    
        default:
            break;
    }
}


// async action creator
const fetchData = ()=>{
    return (dispatch)=>{
        dispatch(getTodoRequest)
        axios.get(API_URL)
        .then(res=>{
            const todo = res.data
            const titles = todo.map((to)=>to.title)
            console.log(titles);
            dispatch(getTodoSuccess(titles))
        })
        .catch((error)=>{
            const message = error.message;
            dispatch(getTodoError(message))
            console.log(error.message);
        })
    }
}



// store

const store = createStore(todoReducers,applyMiddleware(thunk))

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchData())