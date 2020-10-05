import React from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import './preloader.scss';

const Preloader = () => {

    return (
        <Grid className='preloader'
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid>
                <CircularProgress />
            </Grid>
        </Grid>
    )
};

export default Preloader;