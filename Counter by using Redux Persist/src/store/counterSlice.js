import { createSlice } from '@reduxjs/toolkit'

// The admin counter slice is  persisted
const adminCounterSlice = createSlice({
  name : "amdinCounter",
  initialState : { adminCounterValue : 0 },
  reducers : {
    increment(state){
        state.adminCounterValue = state.adminCounterValue + 1;
      },
    decrement(state){
      state.adminCounterValue = state.adminCounterValue - 1;
    },
    reset(state){
      state.adminCounterValue = 0;
    }
  }
});

export const adminCounterActions = adminCounterSlice.actions;
export const adminSlice = adminCounterSlice.reducer;

// The user counter slice is not persisted
const userCounterSlice = createSlice({
  name : "userCounter",
  initialState : { userCounterValue : 0 },
  reducers : {
    increment(state){
        state.userCounterValue = state.userCounterValue + 1;
      },
    decrement(state){
      state.userCounterValue = state.userCounterValue - 1;
    },
    reset(state){
      state.userCounterValue = 0;
    }
  }
});

export const userCounterActions = userCounterSlice.actions;
export const userSlice = userCounterSlice.reducer;

