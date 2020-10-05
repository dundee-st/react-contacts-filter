import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterByName, setFilterByGender, setFilterByNationality, clearAllFilters } from '../../actions/contactsActions';
import { filterByNationalitySelector } from '../../selectors/users-selectors';
import Statistic from './Statistic';

const countByNation = (users) => {
    const nationalities = {
        american: 0,
        australian: 0,
        brazilian: 0,
        canadian: 0,
        swiss: 0,
        german: 0,
        danish: 0,
        spanish: 0,
        finnish: 0,
        french: 0,
        british: 0,
        irish: 0,
        iranian: 0,
        norwegian: 0,
        zealander: 0,
        turkish: 0,
        dutch: 0
    }
    users.forEach((item) => {
        switch (item.nat) {
            case 'US':
                nationalities.american += 1;
                break;
            case 'AU':
                nationalities.australian += 1;
                break;
            case 'BR':
                nationalities.brazilian += 1;
                break;
            case 'CA':
                nationalities.canadian += 1;
                break;
            case 'CH':
                nationalities.swiss += 1;
                break;
            case 'DE':
                nationalities.german += 1;
                break;
            case 'DK':
                nationalities.danish += 1;
                break;
            case 'FI':
                nationalities.finnish += 1;
                break;
            case 'FR':
                nationalities.french += 1;
                break;
            case 'GB':
                nationalities.british += 1;
                break;
            case 'IE':
                nationalities.irish += 1;
                break;
            case 'IR':
                nationalities.iranian += 1;
                break;
            case 'NO':
                nationalities.norwegian += 1;
                break;
            case 'NZ':
                nationalities.zealander += 1;
                break;
            case 'TR':
                nationalities.turkish += 1;
                break;
            case 'ES':
                nationalities.spanish += 1;
                break;
            case 'NL':
                nationalities.dutch += 1;
                break;

            default:
                break;
        }
    })
    return nationalities;
}
const countByGender = (users) => {
    const nationalities = {
        all: users.length,
        males: 0,
        females: 0,
        indeterminate: 0,
    }
    users.forEach((item) => {
        switch (item.gender) {
            case "male":
                nationalities.males += 1;
                break;
            case "female":
                nationalities.females += 1;
                break;
            case 'indeterminate':
                nationalities.indeterminate += 1;
                break;
            default:
                break;
        }
    })
    return nationalities;
}

const mapStateToProps = ({ contactsReducer }) => ({
    filterByName: contactsReducer.filterByName,
    gender: contactsReducer.filterByGender,
    nationality: contactsReducer.filterByNationality,
    countByNation: countByNation(filterByNationalitySelector(contactsReducer)),
    countByGender: countByGender(filterByNationalitySelector(contactsReducer))
})


export default connect(mapStateToProps, { setFilterByName, setFilterByGender, setFilterByNationality, clearAllFilters })(Statistic);