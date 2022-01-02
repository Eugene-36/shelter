import * as actions from './global-action';
import axios from 'axios';

axios.defaults.baseURL = 'https://murmuring-woodland-80890.herokuapp.com/api';

//==================================================================
export const addAnimals = credentials => async dispatch => {
  dispatch(actions.fetchAnimalsRequest());

  try {
    const response = await axios.get('animals', credentials);

    dispatch(actions.fetchAnimalsSuccess(response.data.data.animals));
  } catch (error) {
    dispatch(actions.fetchAnimalsError(error.message));
  }
};
