import { combineReducers } from 'redux';
import resourcesReducer from './resourcesReducer';
import userReducer from './userReducer';
import companyReducer from "./companyReducer";

export default combineReducers({
    user: userReducer,
    company: companyReducer,
});