
import {
    SET_USERS, SET_FILTER_BY_NAME, SET_FILTER_BY_GENDER, SET_FILTER_BY_NATIONALITY, SET_PAGE, SET_USERS_ON_PAGE,
    SET_SORT_BY, CLEAR_ALL_FILTER, SET_VIEW_MODE, IS_UPDATING
} from '../actions/contactsActions';

// const SET_USERS = 'SET_USERS';
// const SET_FILTER_BY_NAME = 'SET_FILTER_BY_NAME';
// const SET_FILTER_BY_GENDER = 'SET_FILTER_BY_GENDER';
// const SET_FILTER_BY_NATIONALITY = 'SET_FILTER_BY_NATIONALITY';
// const SET_PAGE = 'SET_PAGE';
// const SET_USERS_ON_PAGE = 'SET_USERS_ON_PAGE';
// const SET_SORT_BY = 'SET_SORT_BY';
// const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER';
// const SET_VIEW_MODE = 'SET_VIEW_MODE';
// const IS_UPDATING = 'IS_UPDATING';

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

// export const setUsers = (users) => ({ type: SET_USERS, users });
// export const setFilterByName = (text) => ({ type: SET_FILTER_BY_NAME, text });
// export const setFilterByGender = (text) => ({ type: SET_FILTER_BY_GENDER, text });
// export const setFilterByNationality = (arrOfNationalities) => ({ type: SET_FILTER_BY_NATIONALITY, arrOfNationalities });
// export const setSortBy = (sortBy) => ({ type: SET_SORT_BY, sortBy });
// export const setPage = (page) => ({ type: SET_PAGE, page });
// export const setUsersOnPage = (usersOnPage) => ({ type: SET_USERS_ON_PAGE, usersOnPage });
// export const clearAllFilters = () => ({ type: CLEAR_ALL_FILTER });
// export const setViewMode = (viewMode) => ({ type: SET_VIEW_MODE, viewMode });
// export const setIsUpdating = (isUpdating) => ({ type: IS_UPDATING, isUpdating });

// export const getAllUsers = () => async (dispatch) => {
//     try {
//         dispatch(setIsUpdating(true))
//         dispatch(getViewMode());
//         let randomNumber = sessionStorage.getItem('usersCount');
//         if (!randomNumber) {
//             randomNumber = Math.floor(Math.random() * (1001 - 50) + 50);
//             sessionStorage.setItem('usersCount', randomNumber);
//         }
//         let response = await contactsApi.getMultipleUsers(randomNumber);

//         if (response.status === 200) {
//             dispatch(setUsers(response.data.results));
//             dispatch(setIsUpdating(false))
//         }
//         else throw (new Error())

//     } catch (err) {
//         console.error("Ошибка: " + err);
//     }
// };

// export const setAndSaveViewMode = (viewMode) => async (dispatch) => {
//     dispatch(setViewMode(viewMode))
//     localStorage.setItem('viewMode', viewMode);
// };

// const getViewMode = () => async (dispatch) => {

//     let viewMode = localStorage.getItem('viewMode');
//     if (!viewMode) {
//         viewMode = 'table'
//         localStorage.setItem('viewMode', viewMode);
//     }
//     dispatch(setViewMode(viewMode))
// };
export default contactsReducer;