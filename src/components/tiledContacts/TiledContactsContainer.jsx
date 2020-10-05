import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setViewMode } from '../../actions/contactsActions';
import { pagination } from '../../selectors/users-selectors'
import TiledContacts from './TiledContacts';
import { ageCounter } from '../../utils/setDateFormat';

const mapStateToProps = ({ contactsReducer }) => ({
    users: pagination(contactsReducer),
    viewMode: contactsReducer.viewMode,
    ageCounter: ageCounter
})


export default connect(mapStateToProps, { setViewMode })(TiledContacts);