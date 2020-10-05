import './footer.scss';
import React from 'react';
import { Grid } from '@material-ui/core';

const Footer = () => {
    return (
        <Grid className='footer'
            container
            direction="row"
            justify="center"
            alignItems="center">
            <p>2020 © Wezom React-Redux Test</p>
        </Grid>
    )
};

export default Footer;