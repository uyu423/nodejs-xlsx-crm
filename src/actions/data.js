import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function getDataRequest(page) {
  return (dispatch) => {
    dispatch(getData());
    return axios.get('/api/data/' + page).then((res) => {
      console.log("Get Rows OK, page is " + page);
      dispatch(getDataSuccess(res.data));
    }).catch((err) => {
      console.log("Get Rows Error");
      dispatch(getDataFailure());
    });;
  };
}

export function getData() {
  return {
    type : GET_DATA
  };
}

export function getDataSuccess(data) {
  return {
      type : GET_DATA_SUCCESS,
      data : data
  };
}

export function getDataFailure() {
  return {
    type : GET_DATA_FAILURE
  };
}
