import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    item:itemReducer,
    error:errorReducer,
    auth:authReducer,
    category:categoryReducer
});