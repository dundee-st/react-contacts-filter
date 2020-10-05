import { connect } from 'react-redux';
import { setFilterByName, setFilterByGender, setFilterByNationality, clearAllFilters, setPage } from '../../actions/contactsActions';
import SearchAndFilter from './SearchAndFilter';


const mapStateToProps = ({ contactsReducer }) => ({
    filterByName: contactsReducer.filterByName,
    gender: contactsReducer.filterByGender,
    nationality: contactsReducer.filterByNationality,
    users: contactsReducer.users
})


export default connect(mapStateToProps, { setFilterByName, setFilterByGender, setFilterByNationality, clearAllFilters, setPage })(SearchAndFilter);