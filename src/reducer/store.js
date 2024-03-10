import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import storage from 'redux-persist/lib/storage';

import loveReducer from "./loveReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart','auth','wish','love'], // Specify which reducers to persist
  };
  const rootReducer = combineReducers({
    cart: cartReducer,
    auth:authReducer,
 
    love:loveReducer
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(
    {
        reducer: persistedReducer,
    }
)


  const persistor = persistStore(store);
 export { store, persistor };