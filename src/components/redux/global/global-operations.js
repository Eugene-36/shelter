import * as actions from './global-action';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

//axios.defaults.baseURL = "http://localhost:4040";

// export const addAnimals = text => dispatch => {
//   dispatch(actions.fetchAnimalsRequest());
//   axios
//     .get('/animals', text)
//     .then(({ data }) => dispatch(actions.fetchAnimalsSuccess(data)))
//     .catch(error => dispatch(actions.fetchAnimalsError(error.message)));
// };

// export default { addAnimals };
//==================================================================
export const addAnimals = credentials => async dispatch => {
  console.log('111111111111111111', credentials);
  dispatch(actions.fetchAnimalsRequest());

  try {
    const response = await axios.get('/animals', credentials);
    console.log('ответ из operations', response);
    // token.set(response.data.token);
    dispatch(actions.fetchAnimalsSuccess(response.data.data.animals));
  } catch (error) {
    dispatch(actions.fetchAnimalsError(error.message));
  }
};
//  default  addAnimals ;
//   axios
//     .get('/transactions/balance')
//     .then(({ data }) => dispatch(actions.fetchBalanceSuccess(data.data)))
//     .catch(error => dispatch(actions.fetchBalanceError(error.message)));
// };

// export const fetchStatictic =
//   ({ month, year }) =>
//   async dispatch => {
//     if (month && year) {
//       dispatch(actions.errorUnset(false));
//       dispatch(actions.statisticUnset());
//       dispatch(actions.fetchStaticticRequest());
//       await axios
//         .get(`/transactions/statistic?month=${month}&year=${year}`)
//         .then(({ data }) => {
//           dispatch(actions.fetchStaticticSuccess(data.data));
//         })
//         .catch(error => {
//           dispatch(actions.fetchStaticticError(error));
//           // dispatch(actions.statisticUnset());
//         });
//     }
//   };

// export const addNewTransaction = transaction => async dispatch => {
//   const newTransaction = {
//     date: transaction.date,
//     type: transaction.type,
//     category: transaction.category,
//     comments: transaction.comments,
//     sum: transaction.sum,
//   };

//   dispatch(actions.addNewTransactionRequest());

//   await axios
//     .post('/transactions', newTransaction)
//     .then(({ data }) => dispatch(actions.addNewTransactionSuccess(data)))
//     .catch(error => dispatch(actions.addNewTransactionError(error.message)));
// };

// export const deleteTransaction = id => dispatch => {
//   dispatch(actions.deleteRequest());
//   // console.log(id);
//   axios
//     .delete(`/transactions/${id}`)
//     .then(() => dispatch(actions.deleteSuccess(id)))
//     .catch(error => dispatch(actions.deleteError(error.message)));
// };
