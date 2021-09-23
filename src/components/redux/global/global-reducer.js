import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // fetchTransactionsRequest,
  // fetchTransactionsSuccess,
  // fetchTransactionsError,
  fetchAnimalsRequest,
  fetchAnimalsSuccess,
  fetchAnimalsError,
  // fetchBalanceRequest,
  // fetchBalanceSuccess,
  // fetchBalanceError,
  // fetchStaticticRequest,
  // fetchStaticticSuccess,
  // fetchStaticticError,
  // errorUnset,
  // statisticUnset,
  // addNewTransactionRequest,
  // addNewTransactionSuccess,
  // addNewTransactionError,
  isModalLogoutOpen,
  isModalLogoutClose,
  // isModalAddTransactionOpen,
  // isModalAddTransactionClose,
  // valueSelect,
  // deleteRequest,
  // deleteSuccess,
  // deleteError,
} from './global-action';

const animals = createReducer([], {
  [fetchAnimalsSuccess]: (_, { payload }) => payload,
});
//console.log(animals);
const loadingReducer = createReducer(false, {
  [fetchAnimalsRequest]: () => true,
  [fetchAnimalsSuccess]: () => false,
  [fetchAnimalsError]: () => false,
  // [addNewTransactionRequest]: () => true,
  // [addNewTransactionSuccess]: () => false,
  // [addNewTransactionError]: () => false,
  // [fetchBalanceRequest]: () => true,
  // [fetchBalanceSuccess]: () => false,
  // [fetchBalanceError]: () => false,
  // [fetchStaticticRequest]: () => true,
  // [fetchStaticticSuccess]: () => false,
  // [fetchStaticticError]: () => false,
  // [deleteRequest]: () => true,
  // [deleteSuccess]: () => false,
  // [deleteError]: () => false,
});

// const balanceReducer = createReducer(0, {
//   [fetchBalanceSuccess]: (_, { payload }) => payload,
// });

// const getStaticticReducer = createReducer([], {
//   [fetchStaticticSuccess]: (_, { payload }) => payload,
//   [statisticUnset]: () => [],
// });

// const inicialValueDate = {
//   month:
//     Number.parseInt(
//       new Date()
//         .toLocaleDateString()
//         .split('.')
//         .reverse()
//         .join('-')
//         .slice(5, 7),
//     ) - 1,
//   year: new Date()
//     .toLocaleDateString()
//     .split('.')
//     .reverse()
//     .join('-')
//     .slice(0, 4),
// };

// const statisticDateReducer = createReducer(inicialValueDate, {
//   [valueSelect]: (state, { payload }) => ({ ...state, ...payload }),
// });

const modalLogoutOpenReducer = createReducer(false, {
  [isModalLogoutOpen]: () => true,
  [isModalLogoutClose]: () => false,
});

// const modalAddTransactionOpenReducer = createReducer(false, {
//   [isModalAddTransactionOpen]: () => true,
//   [isModalAddTransactionClose]: () => false,
// });

// const errorReducer = createReducer(false, {
//   [fetchAnimalsError]: (_, { payload }) => payload,
//   [addNewTransactionError]: (_, { payload }) => payload,
//   [fetchBalanceError]: (_, { payload }) => payload,
//   [fetchStaticticError]: (_, { payload }) => payload,
//   [errorUnset]: () => false,
// });

export default combineReducers({
  animals,
  isModalLogoutOpen: modalLogoutOpenReducer,
  // totalBalance: balanceReducer,
  // getStatictic: getStaticticReducer,
  // statisticDate: statisticDateReducer,
  loadingReducer,
  // isModalLogoutOpen: modalLogoutOpenReducer,
  // isModalAddTransactionOpen: modalAddTransactionOpenReducer,
  // error: errorReducer,
});
