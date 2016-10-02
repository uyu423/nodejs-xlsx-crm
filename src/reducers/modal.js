//not using reducer
import {
  DETAIL_MODAL_ON,
  DETAIL_MODAL_OFF,
  DETAIL_MODAL_REQ,
  DETAIL_MODAL_REQ_SUCCESS,
  DETAIL_MODAL_REQ_FAILURE
} from 'actions/ActionTypes';
import update from 'react-addons-update';

const initState = {
  modal : {
    flag : false,
    idx : null
  },
  request : {
    status : 'INIT',
    results : null
  }
};

export function modal(state, action) {
  if(state === undefined) {
    state = initState.modal;
  }
  switch(action.type) {
    case DETAIL_MODAL_ON :
      return update(state, {
        flag : { $set : true },
        idx : { $set : action.idx }
      });
    case DETAIL_MODAL_OFF :
      return update(state, {
        flag : { $set : false },
      });
    default:
      return state;
  }
}

export function modalRequest(state, action) {
  if(state === undefined) {
    state = initState.request;
  }
  switch(action.type) {
    case DETAIL_MODAL_REQ :
      return update(state, {
        status : { $set : 'WATING' },
        results : { $set : null }
      });
    case DETAIL_MODAL_REQ_SUCCESS :
      return update(state, {
        status : { $set : 'SUCCESS' },
        results : { $set : action.results }
      });
    case DETAIL_MODAL_REQ_FAILURE :
      return update(state, {
        status : { $set : 'FAILURE' }
      });
    default:
      return state;
  }
}
