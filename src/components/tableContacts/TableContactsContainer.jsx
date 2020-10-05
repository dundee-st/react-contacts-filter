import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSortBy } from '../../actions/contactsActions';
import { pagination } from '../../selectors/users-selectors'
import { dateAmericanFormat, ageCounter } from '../../utils/setDateFormat';
import TableContacts from './TableContacts';

const mapStateToProps = ({ contactsReducer }) => ({
    users: pagination(contactsReducer),
    sortBy: contactsReducer.sortBy,
    dateAmericanFormat: dateAmericanFormat,
    ageCounter: ageCounter
})


export default connect(mapStateToProps, { setSortBy })(TableContacts);