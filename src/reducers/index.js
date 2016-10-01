import file from './file';
import { fileList, fileDelete } from './fileList';
import data from './data';

import { combineReducers } from 'redux';

export default combineReducers({
	file, fileList, fileDelete, data
});
