import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../actions/contactsActions';
import { filterByNationalitySelector } from '../../selectors/users-selectors'
import Paginator from './Paginator';



const mapStateToProps = ({ contactsReducer }) => ({
    usersCount: filterByNationalitySelector(contactsReducer).length,
    page: contactsReducer.page,
    usersOnPage: contactsReducer.usersOnPage
})

export default connect(mapStateToProps, { setPage })(Paginator);