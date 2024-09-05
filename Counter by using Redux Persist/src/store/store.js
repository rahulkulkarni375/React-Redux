import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

const store = configureStore({
  reducer: {
    counterSlice : persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;