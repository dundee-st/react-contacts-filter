import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import thunkMiddlewear from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunkMiddlewear));
window.store = store;
export default store;

