// nơi gom lại các trường thông tin của các reducer khác nhau
import {combineReducers} from 'redux';
import info from './infoReducers';

const reducers = combineReducers({
  personalInfo: info,
});

export default (state, action) => reducers(state, action);
