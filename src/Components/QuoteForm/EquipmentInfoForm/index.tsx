import React from 'react';
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useTheme
} from '@mui/material';
import ExtraEquipmentGrid from './ExtraEquipmentGrid';
import {useForm} from '../../../Contexts/FormContext';
import {usePackage} from '../../../Contexts/PackageContext';

const EquipmentInfoForm = () => {
    const {onPackageSelect, selectedPackage} = usePackage();
    const {palette} = useTheme();
    return (
        <Box className={'flex flex-col space-y-[30px] mt-7'}>
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
            <Typography variant={'h4'} sx={{color:palette.primary.main}}>Extra Equipment</Typography>
            <ExtraEquipmentGrid />
            <TextField sx={{width:'100%'}}  label={'Additional information'} variant='standard'/>
        </Box>
    );
};

export default EquipmentInfoForm;