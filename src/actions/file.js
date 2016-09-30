import {
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function fileUploadRequest() {
  return (dispatch) => {
    dispatch(fileUpload());
    return axios.post("/api/upload/type1").then((res) => {
      dispacth(fileUploadSuccess());
    }).catch((err) => {
      dispatch(fileUploadFailure());
    });
  };
}

export function fileUpload() {
  return {
    type : FILE_UPLOAD
  };
}

export function fileUploadSuccess() {
  return {
    type : FILE_UPLOAD_SUCCESS
  };
}

export function fileUploadFailure() {
  return {
    type : FILE_UPLOAD_FAILURE
  };
}
