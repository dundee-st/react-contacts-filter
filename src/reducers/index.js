import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';


let rootReducer = combineReducers({
    contactsReducer,
});

export default rootReducer;