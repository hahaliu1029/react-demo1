import {combineReducers} from 'redux';
import asset from './asset.redux';
import alert from './alert.redux';

export default combineReducers({asset, alert})
