import { configureStore } from "@reduxjs/toolkit"; // import configure Store from redux Toolkit
import counterReducer from './counterSlice'; // import the reducer from counterSlice


// create the redux store 

const store = configureStore({
    reducer:{
        counter: counterReducer, // add counterSlice reducer to store
    }
})

export default store;