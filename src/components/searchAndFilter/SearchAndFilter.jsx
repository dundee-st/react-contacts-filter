import React, { useState } from 'react';
import { Grid, TextField, FormControl, Select, InputLabel, Checkbox, FormControlLabel } from '@material-ui/core';
import './searchAndFilter.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const countries = [
    { name: 'American', value: 'US' },
    { name: 'Australian', value: 'AU' },
    { name: 'Brazilian', value: 'BR' },
    { name: 'Canadian', value: 'CA' },
    { name: 'Swiss', value: 'CH' },
    { name: 'German', value: 'DE' },
    { name: 'Danish', value: 'DK' },
    { name: 'Spanish', value: 'ES' },
    { name: 'Finnish', value: 'FI' },
    { name: 'French', value: 'FR' },
    { name: 'British', value: 'GB' },
    { name: 'Irish', value: 'IE' },
    { name: 'Iranian', value: 'IR' },
    { name: 'Norwegian', value: 'NO' },
    { name: 'New Zealander', value: 'NZ' },
    { name: 'Turkish', value: 'TR' },
    { name: 'Dutch', value: 'NL' }
];

const SearchAndFilter = ({ setFilterByName, filterByName, setFilterByGender, setFilterByNationality, gender, nationality, clearAllFilters, setPage }) => {

    const handleChangeInput = (e) => {
        setFilterByName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setFilterByGender(e.target.value)
        resetPage();
    }
    const handleChangeNationality = (e, value) => {
        setFilterByNationality(value)
        resetPage();
    }
    const handleClearFilters = () => {
        clearAllFilters();
        resetPage();
    }
    const resetPage = () => {
        setPage(1)
    }
    return (
        <Grid container className='search__wrapper' >
            <Grid className='search'
                container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Grid
                    className='search__form'
                    container
                    item
                    md={11}
                    xs={12}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs className='search__fullName_wrapper' md={5} sm={12} xs={12}>
                        <TextField id="outlined-basic" label="Search by full name" variant="outlined" className='search__fullName' size="small"
                            value={filterByName} onChange={handleChangeInput} />
                        {/* <input type="text" placeholder='Search by full name' /> */}
                    </Grid>
                    <Grid item xs className='search__gender_wrapper' md={2} sm={6} xs={12}>
                        <FormControl variant="outlined" className='search__gender' size="small">
                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                            <Select
                                native
                                value={gender}
                                onChange={handleChangeGender}
                                label="Gender">
                                <option aria-label="None" value="" />
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                                <option value={'Indeterminate'}>Indeterminate</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs className='search__nationality_wrapper' md={3} sm={6} xs={12}>
                        <Autocomplete
                            value={nationality}
                            onChange={handleChangeNationality}
                            size="small"
                            multiple
                            id="checkboxes-nationality"
                            options={countries}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Nationality" />
                            )}
                        />
                    </Grid>
                    {/* <Grid item xs className='search__checkBox_wrapper' md={2} sm={12} xs={12}>
                        <FormControlLabel className='search__checkBox'
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="I am creator"
                        />
                    </Grid> */}
                </Grid>
                <Grid item
                    container
                    md={1} xs={12}
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <button className='clear_button' onClick={handleClearFilters} disabled={filterByName === '' && gender === '' && nationality.length === 0 ? true : false}>
                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                            Clear
                        </button>
                </Grid>
            </Grid >
        </Grid >
    );
};

export default SearchAndFilter;