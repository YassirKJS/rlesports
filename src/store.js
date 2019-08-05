/* redux */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/activeIndexReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
);

export default store;

/*
 PS:
    compose is to wrap multiple enhancers (like the redux extension for Firefox Dev tool
 */

/*
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 */