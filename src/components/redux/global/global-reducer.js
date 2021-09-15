import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { isModalLogoutOpen, isModalLogoutClose } from './global-action';

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
  [isModalLogoutClose]: () => false,
});

export default modalLogoutOpenReducer;
