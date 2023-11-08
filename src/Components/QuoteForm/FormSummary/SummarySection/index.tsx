import React, {FC} from 'react';
import {Box, TextField, Divider} from '@mui/material';

interface values {
    title: string;
    value: string;
}
const SummarySection:FC<{values: values[],sectionName:string}> = (props) => {
    return (
        <Box className={'flex flex-col space-y-5'}>
            <Divider className={'text-center font-bold text-2xl'}>{props.sectionName}</Divider>
                {props.values.map((value) => {
                    return (
                        <TextField InputProps={{
                            readOnly: true,
                        }} label={value.title} variant={'standard'} value={value.value} disabled  sx={{
                            "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "#000000",
                            }, '.Mui-disabled':{
                                color:'black'
                            }
                        }} />
                    )
                })}
        </Box>

    );
};

export default SummarySection;