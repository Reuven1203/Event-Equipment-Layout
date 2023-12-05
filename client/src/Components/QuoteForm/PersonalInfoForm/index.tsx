import React from 'react';
import {Box, TextField, Typography} from '@mui/material';
import {useForm} from '../../../Contexts/FormContext';
import {useTheme} from '@mui/material';

const PersonalInfoForm = () => {
    const {formik} = useForm();
    const {palette} = useTheme();
    const firstStepFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            value: formik.values.name,
            error: formik.errors.name
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            value: formik.values.email,
            error: formik.errors.email
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            required: true,
            value: formik.values.phone,
            error: formik.errors.phone
        }
    ]
    return (
        <Box className={'w-full flex flex-col space-y-[20px] mt-6'}>
            {firstStepFields.map((field) => {
                return (
                    <>
                        <TextField key={field.name} sx={{width:'100%'}} name={field.name} error={field.error != undefined}  label={field.label} variant='standard' onChange={formik.handleChange} value={field.value}/>
                        {field.error && <Typography sx={{color:palette.error.main}}>{field.error}</Typography>}
                    </>
                )
            })}
        </Box>
    );
};

export default PersonalInfoForm;