import {
   GET_DETAIL,
   GET_DETAIL_SUCCESS,
   GET_DETAIL_FAILURE
} from 'actions/ActionTypes';
import update from 'react-addons-update';

const initState = {
  status : 'INIT',
  results : {}
};

export default function detail(state, action) {
  if(state === undefined) {
    state = initState;
  }
  switch(action.type) {
    case GET_DETAIL:
      return update(state, {
        status : { $set : 'WATING' }
      });
    case GET_DETAIL_SUCCESS:
      return update(state, {
        status : { $set : 'SUCCESS' },
        results : { $set : action.res.results }
      });
    case GET_DETAIL_FAILURE:
      return update(state, {
        status : { $set : 'FAILURE' }
      });
    default:
      return state;
  }
}
