
import {
    SET_USERS, SET_FILTER_BY_NAME, SET_FILTER_BY_GENDER, SET_FILTER_BY_NATIONALITY, SET_PAGE, SET_USERS_ON_PAGE,
    SET_SORT_BY, CLEAR_ALL_FILTER, SET_VIEW_MODE, IS_UPDATING
} from '../actions/contactsActions';

let initialState = {
    users: null,
    filterByName: '',
    filterByGender: '',
    filterByNationality: [],
    page: 1,
    usersOnPage: 10,
    sortBy: 'none',
    viewMode: 'table',
    isUpdating: true
};

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_VIEW_MODE:
            return {
                ...state,
                viewMode: action.viewMode
            }
        case CLEAR_ALL_FILTER:
            return {
                ...state,
                filterByName: '',
                filterByGender: '',
                filterByNationality: []
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_FILTER_BY_NAME:
            return {
                ...state,
                filterByName: action.text
            }
        case SET_FILTER_BY_GENDER:
            return {
                ...state,
                filterByGender: action.text
            }
        case SET_FILTER_BY_NATIONALITY:
            return {
                ...state,
                filterByNationality: action.arrOfNationalities
            }
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_USERS_ON_PAGE:
            return {
                ...state,
                usersOnPage: action.usersOnPage
            }
        case IS_UPDATING:
            return {
                ...state,
                isUpdating: action.isUpdating
            }
        default:
            break;
    }
    return state;
}

export default contactsReducer;