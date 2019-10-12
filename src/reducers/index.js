import { combineReducers } from 'redux';
//import activeIndexReducer from './activeIndexReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    //activeIndex: activeIndexReducer
    login: loginReducer
});

export default rootReducer;