import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import globalReducer from './global/global-reducer';

const middleware = applyMiddleware(createPromise(), thunk, createLogger());

const config = {
  key: 'root',
  storage,
};

const reducers = persistCombineReducers(config, { globalReducer });

const configureStore = () => {
  const store = createStore(reducers, middleware);

  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import globalReducer from './global/global-reducer';
// //import authReducer from './auth/auth-reducer';

// const middleware = getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     global: globalReducer,
//   },
//   middleware,
// });

// const persistor = persistStore(store);

// export default { store, persistor };
