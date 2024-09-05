import { configureStore } from "@reduxjs/toolkit";
import { adminSlice,userSlice } from "./counterSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, adminSlice);

const store = configureStore({
  reducer: {
    adminSlice : persistedReducer,
    userSlice  : userSlice,
  },
});

export const persistor = persistStore(store);
export default store;