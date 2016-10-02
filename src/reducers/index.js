import file from './file';
import { fileList, fileDelete } from './fileList';
import data from './data';
//import detail from './detail'
import { modal, modalRequest } from './modal';

import { combineReducers } from 'redux';

export default combineReducers({
	file, fileList, fileDelete, data, modal, modalRequest
});
