//using fatilure, not use actions
import {
  DETAIL_MODAL_ON,
  DETAIL_MODAL_OFF,
  DETAIL_MODAL_REQ,
  DETAIL_MODAL_REQ_SUCCESS,
  DETAIL_MODAL_REQ_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function detailModalOn(idx) {
  return {
    type : DETAIL_MODAL_ON,
    idx : idx
  };
}

export function detailModalOff() {
  return {
    type : DETAIL_MODAL_OFF
  };
}

export function detailModalRequest(idx) {
  return (dispatch) => {
    dispatch(detailModalReq());
    return axios.get('/api/data/detail/' + idx).then((res) => {
      console.log("Get Data Idx " + idx);
      dispatch(detailModalReqSuccess(res.data));
    }).catch((err) => {
      console.log("Get Data Failure", err);
      dispatch(detailModalReqFailure());
    });
  };
}

export function detailModalReq() {
  return {
    type : DETAIL_MODAL_REQ
  };
}

export function detailModalReqSuccess(res) {
  return {
    type : DETAIL_MODAL_REQ_SUCCESS,
    results : res.results
  };
}

export function detailModalReqFailure() {
  return {
    type : DETAIL_MODAL_REQ_FAILURE
  };
}
