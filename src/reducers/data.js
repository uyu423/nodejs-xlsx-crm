import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from 'actions/ActionTypes';
import update from 'react-addons-update';

const initState = {
  status : 'INIT',
  rows : [],
  page : 1
};

export default function data(state, action) {
  if(state === undefined) {
    state = initState;
  }
  switch(action.type) {
    case GET_DATA : 
      return update(state, {
        status : { $set : 'WATING' }
      });
    case GET_DATA_SUCCESS : 
      return update(state, {
        status : { $set : 'SUCCESS' },
        rows : { $set : action.data.rows }
      });
    case GET_DATA_FAILURE : 
      return update(state, {
        status : { $set : 'FAILURE' }
      });
    default:
      return state;
  }
}
