import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAnimalsRequest,
  fetchAnimalsSuccess,
  fetchAnimalsError,
  isModalLogoutOpen,
  isModalLogoutClose,
} from './global-action';

const animals = createReducer([], {
  [fetchAnimalsSuccess]: (_, { payload }) => payload,
});
//console.log(animals);
const loadingReducer = createReducer(false, {
  [fetchAnimalsRequest]: () => true,
  [fetchAnimalsSuccess]: () => false,
  [fetchAnimalsError]: () => false,
});

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
  [isModalLogoutClose]: () => false,
});

export default combineReducers({
  animals,
  isModalLogoutOpen: modalLogoutOpenReducer,

  loadingReducer,
});
