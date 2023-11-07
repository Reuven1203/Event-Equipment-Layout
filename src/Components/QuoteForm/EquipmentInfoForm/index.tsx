import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import ExtraEquipmentGrid from './ExtraEquipmentGrid';
import {useForm} from '../../../Contexts/FormContext';
import {usePackage} from '../../../Contexts/PackageContext';

const EquipmentInfoForm = () => {
    const {formik} = useForm();
    const {onPackageSelect, selectedPackage} = usePackage();
    return (
        <div className={'flex flex-col space-y-[30px] mt-7'}>
            <FormControl fullWidth>
                <InputLabel>Package</InputLabel>
                <Select
                    label="Package"
                    value={selectedPackage}
                    onChange={(event) => onPackageSelect(Number(event.target.value))}
                >
                    <MenuItem value={0}>Basic</MenuItem>
                    <MenuItem value={1}>Standard</MenuItem>
                    <MenuItem value={2}>Deluxe</MenuItem>
                </Select>
            </FormControl>
            <h1>Extra Equipment</h1>
            <ExtraEquipmentGrid />
            <TextField sx={{width:'100%'}}  label={'Additional information'} variant='standard'/>
        </div>
    );
};

export default EquipmentInfoForm;