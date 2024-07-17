const redux = require('redux')

const counterReducer = (state = {counter : 0}, action) => {
  if(action.type == 'increment')
    return {
    counter : state.counter + 1
  };

  if(action.type == 'decrement')
    return {
    counter : state.counter - 1
  };
  
  return state;
};

const store = redux.createStore(counterReducer);

console.log("store.getState ",store.getState());

const counterSubscriber = () =>{
  console.log("Lastest state ", store.getState());
}

store.subscribe(counterSubscriber);

store.dispatch({type : 'increment'});
store.dispatch({type : 'increment'});
store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});
store.dispatch({type : 'stop'});


/*
create store
create reducerFn  
const store = redux.createStore(reducerFn)
create subscribeFn
store.subscribe(subscribeFn)
store.dispatch({type : 'actionName'})
*/
