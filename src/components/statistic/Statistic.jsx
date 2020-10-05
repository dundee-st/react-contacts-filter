import React from 'react';
import { Grid } from '@material-ui/core';
import './satistic.scss';




const Statistic = ({ countByNation, countByGender }) => {
    return (
        <Grid container className='statistic' >
            <Grid className='statistic__wrapper'
                container
                direction="column"
                justify="center"
                alignItems="flex-start" >
                <h3>Statistic</h3>
                <Grid className='statistic__count'
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}>
                    <Grid item>
                        <Grid className='statistic__headerOfCount'>Collection size</Grid>
                        <Grid className='statistic__counter'><span>{countByGender.all}</span></Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid className='statistic__headerOfCount'>Males</Grid>
                                <Grid className='statistic__counter'><span>{countByGender.males}</span></Grid>
                            </Grid>
                            <Grid item>
                                <Grid className='statistic__headerOfCount'>Females</Grid>
                                <Grid className='statistic__counter'><span>{countByGender.females}</span></Grid>
                            </Grid>
                            <Grid item>
                                <Grid className='statistic__headerOfCount'>Indeterminate</Grid>
                                <Grid className='statistic__counter'><span>{countByGender.indeterminate}</span></Grid>
                            </Grid>
                        </Grid>
                        <Grid className='statistic__predominate'>
                            {countByGender.males > countByGender.females ? <span>Men predominate</span> : <span>Women predominate</span>}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className='statistic__nationalities'
                    container
                    direction="column">
                    <Grid item>
                        <Grid className='statistic__headerOfCount'>Nationalities</Grid>
                    </Grid>
                    <div className='statistic__nationalities-counters'>
                        {countByNation.zealander > 0 ?
                            <div>
                                <span>New Zealander: </span>
                                <span>{countByNation.zealander} contacts</span>
                            </div>
                            : ''}
                        {countByNation.swiss > 0 ?
                            <div>
                                <span>Swiss: </span>
                                <span>{countByNation.swiss} contacts</span>
                            </div>
                            : ''}
                        {countByNation.irish > 0 ?
                            <div>
                                <span>Irish: </span>
                                <span>{countByNation.irish} contacts</span>
                            </div>
                            : ''}
                        {countByNation.australian > 0 ?
                            <div>
                                <span>Australian: </span>
                                <span>{countByNation.australian} contacts</span>
                            </div>
                            : ''}
                        {countByNation.canadian > 0 ?
                            <div>
                                <span>Canadian: </span>
                                <span>{countByNation.canadian} contacts</span>
                            </div>
                            : ''}
                        {countByNation.brazilian > 0 ?
                            <div>
                                <span>Brazilian: </span>
                                <span>{countByNation.brazilian} contacts</span>
                            </div>
                            : ''}
                        {countByNation.british > 0 ?
                            <div>
                                <span>British: </span>
                                <span>{countByNation.british} contacts</span>
                            </div>
                            : ''}
                        {countByNation.french > 0 ?
                            <div>
                                <span>French: </span>
                                <span>{countByNation.french} contacts</span>
                            </div>
                            : ''}
                        {countByNation.german > 0 ?
                            <div>
                                <span>German: </span>
                                <span>{countByNation.german} contacts</span>
                            </div>
                            : ''}
                        {countByNation.spanish > 0 ?
                            <div>
                                <span>Spanish: </span>
                                <span>{countByNation.spanish} contacts</span>
                            </div>
                            : ''}
                        {countByNation.dutch > 0 ?
                            <div>
                                <span>Dutch: </span>
                                <span>{countByNation.dutch} contacts</span>
                            </div>
                            : ''}
                        {countByNation.iranian > 0 ?
                            <div>
                                <span>Iranian: </span>
                                <span>{countByNation.iranian} contacts</span>
                            </div>
                            : ''}
                        {countByNation.finnish > 0 ?
                            <div>
                                <span>Finnish: </span>
                                <span>{countByNation.finnish} contacts</span>
                            </div>
                            : ''}
                        {countByNation.norwegian > 0 ?
                            <div>
                                <span>Norwegian: </span>
                                <span>{countByNation.norwegian} contacts</span>
                            </div>
                            : ''}
                        {countByNation.american > 0 ?
                            <div>
                                <span>American: </span>
                                <span>{countByNation.american} contacts</span>
                            </div>
                            : ''}
                        {countByNation.danish > 0 ?
                            <div>
                                <span>Danish: </span>
                                <span>{countByNation.danish} contacts</span>
                            </div>
                            : ''}
                        {countByNation.turkish > 0 ?
                            <div>
                                <span>Turkish: </span>
                                <span>{countByNation.turkish} contacts</span>
                            </div>
                            : ''}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Statistic;