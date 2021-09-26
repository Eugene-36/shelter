import * as actions from './global-action';
import axios from 'axios';

axios.defaults.baseURL = 'https://murmuring-woodland-80890.herokuapp.com/api';

//==================================================================
export const addAnimals = credentials => async dispatch => {
  console.log('111111111111111111', credentials);
  dispatch(actions.fetchAnimalsRequest());

  try {
    const response = await axios.get('animals', credentials);
    console.log('ответ из operations', response);
    // token.set(response.data.token);
    dispatch(actions.fetchAnimalsSuccess(response.data.data.animals));
  } catch (error) {
    dispatch(actions.fetchAnimalsError(error.message));
  }
};
