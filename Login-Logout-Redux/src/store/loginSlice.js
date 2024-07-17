import { createSlice } from '@reduxjs/toolkit'

const userAuthSlice = createSlice({
  name : "userAuth",
  initialState : { isAuthenticated : false },
  reducers : {
    login(state){
        state.isAuthenticated = true
      },
    logout(state){
        state.isAuthenticated = false    
    }
  }
});

export const userAuthActions = userAuthSlice.actions;
export const authSlice = userAuthSlice.reducer;