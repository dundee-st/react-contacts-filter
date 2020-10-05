import { createSelector } from 'reselect';

const getUsers = contactsReducer => contactsReducer.users;
const getFilterByName = contactsReducer => contactsReducer.filterByName;
const getPage = contactsReducer => contactsReducer.page;
const getUsersOnPage = contactsReducer => contactsReducer.usersOnPage;
const filterByGender = contactsReducer => contactsReducer.filterByGender;
const filterByNationality = contactsReducer => contactsReducer.filterByNationality;
const getSortBy = contactsReducer => contactsReducer.sortBy;

export const filterByNameSelector = createSelector(getUsers, getFilterByName, (items, filterText) => {
    if (items) {
        let filterTextByName = filterText.toLowerCase();
        return items.filter((item) => {
            let fullName = item.name.title.toLowerCase() + '.' + ' ' + item.name.first.toLowerCase() + ' ' + item.name.last.toLowerCase();
            if (fullName.includes(filterTextByName)) return item;
        })
    }
});

export const filterByGenderSelector = createSelector(filterByNameSelector, filterByGender, (items, gender) => {
    if (items) {
        let genderFilter = gender.toLowerCase();
        if (genderFilter === '') return items;
        else {
            return items.filter((item) => item.gender === genderFilter)
        }

    }
});

export const filterByNationalitySelector = createSelector(filterByGenderSelector, filterByNationality, (items, nationality) => {
    if (items) {
        if (nationality.length === 0) return items;
        else return items.filter((item) => {
            for (let i = 0; i < nationality.length; i++) {
                if (nationality[i].value == item.nat) return item;
            }
        });
    }
});

export const sort = createSelector(filterByNationalitySelector, getSortBy, (items, sortBy) => {
    if (items) {
        let newItems = [...items];
        if (sortBy === 'none') return items;
        if (sortBy === 'asc') {

            newItems.sort((a, b) => {
                // console.log(a.name.title.toLowerCase())
                if (a.name.title.toLowerCase() < b.name.title.toLowerCase()) return -1;
                if (a.name.title.toLowerCase() > b.name.title.toLowerCase()) return 1;
                return 0;
            })
            return [...newItems]
        }
        if (sortBy === 'dec') {
            newItems.sort((a, b) => {
                if (a.name.title.toLowerCase() > b.name.title.toLowerCase()) return -1;
                if (a.name.title.toLowerCase() < b.name.title.toLowerCase()) return 1;
                return 0;
            })
            return [...newItems]
        }
    }
});

export const pagination = createSelector(sort, getPage, getUsersOnPage, (items, page, usersOnPage) => {
    if (items) {
        let currentPageUsersFrom = ((page - 1) * usersOnPage);
        let currentPageUsersTo = currentPageUsersFrom + (usersOnPage - 1);
        return items.filter((item, index) => {
            if (index >= currentPageUsersFrom && index <= currentPageUsersTo) return item;
        })
    }
});