import React, { useState } from 'react';
import './tableContacts.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { setNationality } from '../../utils/setNationality';

const TableContacts = ({ users, setSortBy, sortBy, dateAmericanFormat, ageCounter }) => {

    const createSortHandler = () => (event) => {
        if (sortBy === 'none') setSortBy('asc');
        if (sortBy === 'asc') setSortBy('dec');
        if (sortBy === 'dec') setSortBy('none');
    };
    const copyToBufer = (content) => {
        navigator.clipboard.writeText(content)
    }
    return (
        <React.Fragment>
            <TableContainer component={Paper} className='table-contacts'>
                <Table className={'table-contacts'} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Avatar</TableCell>
                            <TableCell align="left"
                            // sortDirection={true}
                            >
                                <TableSortLabel
                                    active={true}
                                    onClick={createSortHandler()}
                                    IconComponent={sortBy === 'none' ? SwapCallsIcon : (sortBy === 'asc' ? ArrowUpwardIcon : ArrowDownwardIcon)}
                                    fontSize="large">
                                    Full name
                                </TableSortLabel>

                            </TableCell>
                            <TableCell align="left">Birthday</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="left">Nationality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    <img src={item.picture.thumbnail} alt="" />
                                </TableCell>
                                <TableCell align="left">{item.name.title}. {item.name.first} {item.name.last}</TableCell>
                                <TableCell align="left">{dateAmericanFormat(item.dob.date)}, {ageCounter(item.dob.date)} years</TableCell>
                                <TableCell align="left" onClick={() => copyToBufer(item.email)} className='copy-content'>{item.email}</TableCell>
                                <TableCell align="left" onClick={() => copyToBufer(item.cell)} className='copy-content'>{item.cell}</TableCell>
                                <TableCell align="left">
                                    <b>/{item.location.country}/</b><br />
                                    {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}
                                </TableCell>
                                <TableCell align="right">{setNationality(item.nat)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment >
    );
};

export default TableContacts;