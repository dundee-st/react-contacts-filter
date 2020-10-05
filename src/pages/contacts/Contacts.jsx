import React from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import './contacts.scss';
import TableContactsContainer from '../../components/tableContacts/TableContactsContainer';
import StatisticContainer from '../../components/statistic/StatisticContainer';
import PaginatiorContainer from '../../components/paginator/PaginatorContainer';
import SearchAndFilterContainer from '../../components/searchAndFilter/SearchAndFilterContainer';
import TiledContactsContainer from '../../components/tiledContacts/TiledContactsContainer';
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Preloader from '../../components/preloader/Preloader';
import ReplayIcon from '@material-ui/icons/Replay';

const Contacts = ({ setAndSaveViewMode, viewMode, setUsersOnPage, setPage, isUpdating, getAllUsers }) => {

    const handleChangeViewMode = (e) => {
        if (e.currentTarget.classList.contains("active")) return;
        if (viewMode === 'table') {
            setAndSaveViewMode('tiled');
            setUsersOnPage(6);
        }
        if (viewMode === 'tiled') {
            setAndSaveViewMode('table');
            setUsersOnPage(10)
        }
        setPage(1)
    }
    const handleUpdate = () => {
        getAllUsers()
    }
    return (
        <Grid container className='contacts'>
            <Grid className='contacts__head'
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid>
                    <h3>Contacts</h3>
                </Grid>
                <Grid className='contacts__button'
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Button className={`update ${isUpdating ? 'spin' : ''}`} onClick={handleUpdate}><ReplayIcon /></Button>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button className={viewMode === 'tiled' ? 'active' : ''} onClick={handleChangeViewMode}><ViewModuleIcon /></Button>
                        <Button className={viewMode === 'table' ? 'active' : ''} onClick={handleChangeViewMode}><ListIcon /></Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <SearchAndFilterContainer />
            {isUpdating === false ?
                <React.Fragment>
                    {viewMode === 'table'
                        ? <TableContactsContainer />
                        : <TiledContactsContainer />
                    }
                    <StatisticContainer />
                    <PaginatiorContainer />
                </React.Fragment>
                :
                <Preloader />
            }
        </Grid>
    );
};

export default Contacts;