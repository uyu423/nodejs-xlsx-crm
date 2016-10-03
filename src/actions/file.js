import {
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE,
} from './ActionTypes';
import axios from 'axios';

export function fileUploadRequest(formData) {
  return (dispatch) => {
    dispatch(fileUpload());
    const ops = {
      method : 'post',
      url : '/api/upload/type1',
      data : formData
    };
    console.log("OPS : ", ops);
    return axios(ops).then((res) => {
      console.log("RES", res);
      console.log("FORMDATA", formData.get('xlsx'));
      dispatch(fileUploadSuccess());
    }).catch((err) => {
      console.log("ERR", err);
      alert("업로드 실패 : " + err);
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
