import {
  GET_FILE_LIST,
  GET_FILE_LIST_SUCCESS,
  GET_FILE_LIST_FAILURE,
  FILE_DELETE,
  FILE_DELETE_SUCCESS,
  FILE_DELETE_FAILURE
} from 'actions/ActionTypes';
import update from 'react-addons-update';

const initState = {
    fileList : {
      status : 'INIT',
      list : []
    },
    fileDelete : {
      status : 'INIT'
    }
};

export function fileList(state, action) {
  if(state === undefined) {
    state = initState.fileList;
  }
  switch(action.type) {
    case GET_FILE_LIST :
      return update(state, {
        status : { $set : 'WATING' }
      });
    case GET_FILE_LIST_SUCCESS :
      console.log("action : ", action);
      return update(state, {
        status : { $set : 'SUCCESS' },
        list : { $set : action.data.list }
      });
    case GET_FILE_LIST_FAILURE :
      return update(state, {
        status : { $set : 'FAILURE' }
      });
    default :
      return state;
  }
}

export function fileDelete(state, action) {
  if(state === undefined) {
    state = initState.fileDelete;
  }
  switch(action.type) {
    case FILE_DELETE :
      return update(state, { status : { $set : 'WATING' } });
    case FILE_DELETE_SUCCESS :
      return update(state, { status : { $set : 'SUCCESS' } });
    case FILE_DELETE_FAILURE :
      return update(state, { status : { $set : 'FAILURE' } });
    default :
      return state;
  }
}
