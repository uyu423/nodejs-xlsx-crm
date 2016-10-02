import {
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE
} from './ActionTypes';
import axios from 'axios';
import moment from 'moment';

export function getDetailRequest(idx) {
  return (dispatch) => {
    dispatch(getDetail());
    return axios.get('/api/data/detail/' + idx).then((res) => {
      console.log("Get Data Idx " + idx);
      dispatch(getDetailSuccess(res.data));
    }).catch((err) => {
      console.log("Get Data Failure");
      dispatch(getDetailFailure());
    });
  };
}

export function getDetail() {
  return {
    type : GET_DETAIL
  };
}

export function getDetailSuccess(res) {
  return {
    type : GET_DETAIL_SUCCESS,
    res : res
  };
}

export function getDetailFailure() {
  return {
    type : GET_DETAIL_FAILURE
  };
}
