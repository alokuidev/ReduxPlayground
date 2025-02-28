import { createSlice } from "@reduxjs/toolkit"; // import createSlice from redux Toolkit


//Define the initialState
const initialState = {
    value:0
};

//create a slice for counter state
const counterSlice = createSlice({
    name:'counter',  // name of the slice
    initialState,    // set the intial State
    reducers:{
        increment: (state) =>{
            state.value += 1;   // increase the counter by 1
        },
        decrement: (state) =>{
            state.value -= 1;   // decrease the counter by 1
        },
        incrementByAmount:(state,action) =>{
            state.value + action.payload;   // increase by specific value (dynamic)
        },
    },
});

//export actions so they can be disptached from compoenents

export const {increment,decrement, incrementByAmount} = counterSlice.actions;

//export the reducer to be added to the store

export default counterSlice.reducer;