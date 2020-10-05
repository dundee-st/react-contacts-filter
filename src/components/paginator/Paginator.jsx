import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

const Paginator = ({ usersCount, page, setPage, usersOnPage }) => {
    let pageCount = Math.ceil(usersCount / usersOnPage)

    const handleChange = (e, page) => {
        setPage(page)
    }
    return (
        <Grid container justify="flex-end">
            <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Grid>

    );
};

export default Paginator;