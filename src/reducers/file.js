import {
  FILE_UPLOAD,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE
} from 'actions/ActionTypes';
import update from 'react-addons-update';

const initState = {
  file : {
    status : 'INIT',
    xlsx : null
  }
};

export default function file(state, action) {
  if(state === undefined) {
    state = initState;
  }
  switch(action.type) {
    case FILE_UPLOAD :
      return update(state, {
        file : {
          status : { $set : 'WATING' }
        }
      });
    case FILE_UPLOAD_SUCCESS :
      return update(state, {
        file : {
          status : { $set : 'SUCCESS' }
        }
      });
    case FILE_UPLOAD_FAILURE :
      return update(state, {
        file : {
          status : { $set : 'FAILURE' }
        }
      });
    default :
      return state;
  }
}
