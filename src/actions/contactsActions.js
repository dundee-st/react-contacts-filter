import { contactsApi } from "../api/api";

export const SET_USERS = 'SET_USERS';
export const SET_FILTER_BY_NAME = 'SET_FILTER_BY_NAME';
export const SET_FILTER_BY_GENDER = 'SET_FILTER_BY_GENDER';
export const SET_FILTER_BY_NATIONALITY = 'SET_FILTER_BY_NATIONALITY';
export const SET_PAGE = 'SET_PAGE';
export const SET_USERS_ON_PAGE = 'SET_USERS_ON_PAGE';
export const SET_SORT_BY = 'SET_SORT_BY';
export const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER';
export const SET_VIEW_MODE = 'SET_VIEW_MODE';
export const IS_UPDATING = 'IS_UPDATING';

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setFilterByName = (text) => ({ type: SET_FILTER_BY_NAME, text });
export const setFilterByGender = (text) => ({ type: SET_FILTER_BY_GENDER, text });
export const setFilterByNationality = (arrOfNationalities) => ({ type: SET_FILTER_BY_NATIONALITY, arrOfNationalities });
export const setSortBy = (sortBy) => ({ type: SET_SORT_BY, sortBy });
export const setPage = (page) => ({ type: SET_PAGE, page });
export const setUsersOnPage = (usersOnPage) => ({ type: SET_USERS_ON_PAGE, usersOnPage });
export const clearAllFilters = () => ({ type: CLEAR_ALL_FILTER });
export const setViewMode = (viewMode) => ({ type: SET_VIEW_MODE, viewMode });
export const setIsUpdating = (isUpdating) => ({ type: IS_UPDATING, isUpdating });

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(setIsUpdating(true))
        dispatch(getViewMode());
        let randomNumber = sessionStorage.getItem('usersCount');
        if (!randomNumber) {
            randomNumber = Math.floor(Math.random() * (1001 - 50) + 50);
            sessionStorage.setItem('usersCount', randomNumber);
        }
        let response = await contactsApi.getMultipleUsers(randomNumber);

        if (response.status === 200) {
            dispatch(setUsers(response.data.results));
            dispatch(setIsUpdating(false))
        }
        else throw (new Error())

    } catch (err) {
        console.error("Ошибка: " + err);
    }
};

export const setAndSaveViewMode = (viewMode) => async (dispatch) => {
    dispatch(setViewMode(viewMode))
    localStorage.setItem('viewMode', viewMode);
};

const getViewMode = () => async (dispatch) => {

    let viewMode = localStorage.getItem('viewMode');
    if (!viewMode) {
        viewMode = 'table'
        localStorage.setItem('viewMode', viewMode);
    }
    dispatch(setViewMode(viewMode))
};