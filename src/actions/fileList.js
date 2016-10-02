import {
  GET_FILE_LIST,
  GET_FILE_LIST_SUCCESS,
  GET_FILE_LIST_FAILURE,
  FILE_DELETE,
  FILE_DELETE_SUCCESS,
  FILE_DELETE_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function fileListRequest() {
  return (dispatch) => {
    dispatch(fileList());
    return axios.get('/api/file').then((res) => {
      console.log("Get File List OK");
      console.log("File List", res.data);
      dispatch(fileListSuccess(res.data));
    }).catch((err) => {
      console.log("Get File List Failure");
      dispatch(fileListFailure());
    });
  };
}

export function fileList() {
  return {
    type : GET_FILE_LIST
  };
}

export function fileListSuccess(data) {
  return {
    type : GET_FILE_LIST_SUCCESS,
    data : data
  };
}

export function fileListFailure() {
  return {
    type : GET_FILE_LIST_FAILURE
  };
}

export function fileDeleteRequest(fileIdx) {
  return (dispatch) => {
    dispatch(fileDelete());
    return axios.delete('/api/delete/' + fileIdx).then((res) => {
      console.log("File Delete OK");
      dispatch(fileDeleteSuccess());
    }).catch((err) => {
      console.log("File Delete Failure : ", err);
      dispatch(fileDeleteFailure());
    });
  };
}

export function fileDelete() {
  return {
    type : FILE_DELETE
  };
}

export function fileDeleteSuccess() {
  return {
    type : FILE_DELETE_SUCCESS
  };
}

export function fileDeleteFailure() {
  return {
    type : FILE_DELETE_FAILURE
  };
}
