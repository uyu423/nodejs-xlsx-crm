import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './ActionTypes';
import axios from 'axios';
import moment from 'moment';

function dateForm(arg) {
  return moment(arg, 'YYYYMMDD').format('YYYMMDD');
}

export function getDataRequest(date, page) {
  return (dispatch) => {
    dispatch(getData());
    return axios.get('/api/data/' + date + '/' + page).then((res) => {
      console.log("Get Rows OK, date is " + date + ", page is " + page);
      dispatch(getDataSuccess(res.data));
    }).catch((err) => {
      console.log("Get Rows Error");
      dispatch(getDataFailure());
    });
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
