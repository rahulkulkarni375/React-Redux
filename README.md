
# React Redux


React Redux simplifies managing state in React apps using predictable containers and connecting state changes to components efficiently.





## Steps to manage state using redux

- Install packages redux, react-redux and @reduxjs/toolkit
- Create a folder and file named as store and store.js and export store.js
- Create slices using createSlice
```javascript
const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers : {
      multiply(state,action) {
        state.count *= action.payload
      }
    }
});

 ```
- After creating slice/'s  configure with store 
    ```javascript 
    const store = configureStore({reducer : {  counter : counterSlice.reducer } })
    ```
- After configuring with it, configureStore sets up a well-configured Redux store with a single function call, 
          including combining reducers, adding the thunk middleware.
    ```javascript 
    export counterActions = counterSlice.actions
    ```
- Import store and add  Provider in the main.jsx 
    ```javascript 
    <Provider store={store}>
        <App/>
    <Provider/>
    ```

- Import useSelector, where you want to render it in the UI 
- Import useDispatch & useActions, from where you want to update states 
- useSelector is used to access the state stored in a Redux store like 
    ```javascript    
    const counter = useSelector(state => state.counter.count);
    ```
- useDispatch is used to dispatch/send actions to the Redux store like multiple is the name of useState hook and it is a payload
```javascript
    dispatch(counterActions.multiply(multiple))    
```

## Documentation

-[React redux](https://react-redux.js.org/)
## Tech Stack

**Client:** React, Redux, Bootstrap, Material UI

**Server:** Node, Express


## Feedback

If you have any feedback, please reach out

