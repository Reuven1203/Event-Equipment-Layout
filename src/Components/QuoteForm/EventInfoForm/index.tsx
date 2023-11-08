import React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {FormControl, InputLabel, MenuItem, Select, Slider, TextField} from '@mui/material';
import {useForm} from '../../../Contexts/FormContext';
import {eventTypes} from '../../../lib/eventTypes';

const EventInfoForm = () => {
    const {formik} = useForm()
    const handleDateChange = (date: Date | null) => {
        formik.setFieldValue('date', date);
    }
    return (
        <div className={'flex flex-col space-y-[30px] mt-7'}>
            <LocalizationProvider   dateAdapter={AdapterDayjs}>
                <div>
                    <DateTimePicker disablePast={true} value={formik.values.date} onChange={handleDateChange}  sx={{width:'100%'}} label="Date/Time of event" />
                    {formik.errors.date && <p className={'text-red-500 pt-2'}>{formik.errors.date}</p>}
                </div>
            </LocalizationProvider>
            <FormControl fullWidth>
                <InputLabel  error={formik.errors.type != undefined} >Type of event</InputLabel>
                <Select
                    label="Type of event"
                    error={formik.errors.type != undefined}
                    name={'type'}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                >
                    {eventTypes.map((type) => {
                        return (
                            <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                        )
                    })}
                </Select>
                {formik.errors.type && <p className={'text-red-500'}>{formik.errors.type}</p>}
            </FormControl>
            <div>
                <TextField value={formik.values.location} error={formik.errors.location != undefined} sx={{width:'100%'}} name={'location'} onChange={formik.handleChange}  label={'Location of event'} variant='standard'/>
                {formik.errors.location && <p className={'text-red-500 pt-2'}>{formik.errors.location}</p>}
            </div>
            <div className={'flex max-sm:flex-col sm:space-x-5'}>
                <h4 className={'whitespace-nowrap text-center flex items-center'}>Number of guests &nbsp;<span>{formik.values.guestRange[0]} - {formik.values.guestRange[1]}</span></h4>
                <Slider
                    sx={{width:'w-full'}}
                    min={50}
                    step={5}
                    max={1000}
                    disableSwap
                    aria-valuetext={'guests'}
                    valueLabelDisplay={'auto'}
                    valueLabelFormat={(value) => `${value} guests`}
                    value={formik.values.guestRange}
                    name={'guestRange'}
                    onChange={formik.handleChange}
                />
            </div>
        </div>
    );
};

export default EventInfoForm;