import React, { useState } from 'react';
import './tiledContacts.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { setNationality } from '../../utils/setNationality';

const TiledContacts = ({ users, ageCounter }) => {

    const copyToBufer = (content) => {
        navigator.clipboard.writeText(content)
    }

    return (
        <div className='tiled-contacts'>
            {users.map((item, index) => (

                <Card className='tiled-contacts__card' key={index}>
                    <CardActionArea>
                        <CardMedia
                            className='tiled-contacts__media'
                            image={item.picture.large}
                            title="photo" />
                        <CardContent className='tiled-contacts__content'>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name.title}. {item.name.first} {item.name.last}, <small>({ageCounter(item.dob.date)} years)</small>
                            </Typography>
                            <Divider />
                            <Typography variant="body2" color="textSecondary" component="p" onClick={() => copyToBufer(item.email)} className='copy-content'>{item.email}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p" onClick={() => copyToBufer(item.cell)} className='copy-content'>{item.cell}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>/{item.location.country}/</b><br />
                                {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}
                            </Typography>
                            <Divider variant="middle" />
                            <Typography variant="body2" color="textSecondary" component="p">{setNationality(item.nat)}</Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            ))
            }

            {/* <TableContainer component={Paper} className='table-contacts'>
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
                                <TableCell align="left">{item.dob.date}</TableCell>
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
            </TableContainer> */}
        </div >
    );
};

export default TiledContacts;