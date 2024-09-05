import { createSlice } from '@reduxjs/toolkit'

const userCounterSlice = createSlice({
  name : "counter",
  initialState : { counterValue : 0 },
  reducers : {
    increment(state){
        state.counterValue = state.counterValue + 1;
      },
    decrement(state){
      state.counterValue = state.counterValue - 1;
    },
    reset(state){
      state.counterValue = 0;
    }
  }
});

export const userCounterActions = userCounterSlice.actions;
export const counterSlice = userCounterSlice.reducer;