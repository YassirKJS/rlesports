import { combineReducers } from 'redux';
import activeIndexReducer from './activeIndexReducer';

const rootReducer = combineReducers({
    activeIndex: activeIndexReducer
});

export default rootReducer;