import React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import {useForm} from '../../../Contexts/FormContext';
import {eventTypes} from '../../../lib/eventTypes';

const EventInfoForm = () => {
    const {formik} = useForm()
    const {palette} = useTheme();
    const handleDateChange = (date: Date | null) => {
        formik.setFieldValue('date', date);
    }
    return (
        <Container className={'flex flex-col space-y-[30px] mt-7'}>
            <LocalizationProvider   dateAdapter={AdapterDayjs}>
                <Box>
                    {/*soon add a contraint to not allow certain days of week*/}
                    <DateTimePicker disablePast={true} value={formik.values.date} onChange={handleDateChange}  sx={{width:'100%'}} label="Date/Time of event" />
                    {formik.errors.date && <Typography sx={{color:palette.error.main}} className={'pt-2'}>{formik.errors.date}</Typography>}
                </Box>
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
                {formik.errors.type && <Typography sx={{color: palette.error.main}}>{formik.errors.type}</Typography>}
            </FormControl>
            <Box>
                <TextField value={formik.values.location} error={formik.errors.location != undefined} sx={{width:'100%'}} name={'location'} onChange={formik.handleChange}  label={'Location of event'} variant='standard'/>
                {formik.errors.location && <Typography sx={{color: palette.error.main}}>{formik.errors.location}</Typography>}
            </Box>
            <Box className={'flex max-sm:flex-col sm:space-x-5'}>
                <Typography variant={'h6'} sx={{color:palette.text.primary}} className={'whitespace-nowrap text-center flex items-center'}>Number of guests &nbsp;<span>{formik.values.guestRange[0]} - {formik.values.guestRange[1]}</span></Typography>
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
            </Box>
        </Container>
    );
};

export default EventInfoForm;