import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../../assets/images/react-logo.svg'
import './home.scss';

const Home = () => {

    return (
        <Grid className='home'
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid>
                <img src={logo} alt="" />
            </Grid>
        </Grid>
    )
};

export default Home;