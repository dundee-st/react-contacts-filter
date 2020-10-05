import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, setAndSaveViewMode, setUsersOnPage, setPage } from '../../actions/contactsActions';
import { pagination } from '../../selectors/users-selectors';
import Contacts from './Contacts';

const ContactsContainer = ({ users, getAllUsers, viewMode, setAndSaveViewMode, setUsersOnPage, setPage, isUpdating }) => {
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <Contacts users={users} viewMode={viewMode} setAndSaveViewMode={setAndSaveViewMode} setUsersOnPage={setUsersOnPage}
            setPage={setPage} getAllUsers={getAllUsers} isUpdating={isUpdating} />
    );
}

const mapStateToProps = ({ contactsReducer }) => ({
    users: pagination(contactsReducer),
    viewMode: contactsReducer.viewMode,
    isUpdating: contactsReducer.isUpdating
})


export default connect(mapStateToProps, { getAllUsers, setAndSaveViewMode, setUsersOnPage, setPage })(ContactsContainer);