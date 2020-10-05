import './header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import WezomLogo from '../../assets/images/wezom-logo.svg';
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid container className='header'>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid className='header__logo'>
                        <img src={WezomLogo} alt="HotelLogo" />
                    </Grid>
                    <Grid className='header__nav'>
                        <ul>
                            <li >
                                <NavLink to='/' exact activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacts' activeClassName="active">Contacts</NavLink>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;