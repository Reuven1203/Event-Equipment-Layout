import {FC, useState} from 'react';
import {Box, Card, Checkbox, IconButton, Typography, useTheme} from '@mui/material';
import {useForm} from '../../../../../Contexts/FormContext';
import {AddCircleOutline, RemoveCircleOutline} from '@mui/icons-material';

const ExtraEquipmentCard:FC<{reference:number, name: string, img: any, max: number}> = (props) => {
    const {formik} = useForm();
    const checked = formik.values.extraEquipment[props.reference].checked
    const quantity = formik.values.extraEquipment[props.reference].quantity
    const {palette} = useTheme();
    const handleClick = () => {
        if(!checked)
            formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, 1)
        else
            formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, 0)
        formik.setFieldValue(`extraEquipment[${props.reference}].checked`, !checked)

    }
    const handleBlur = () => {
        if(quantity === 0)
            formik.setFieldValue(`extraEquipment[${props.reference}].checked`, false)
        else if(quantity == null) {
            formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, 0)
            formik.setFieldValue(`extraEquipment[${props.reference}].checked`, false)
        }
    }
    const handleQuantityChange = (increase: boolean) => {
        return () => {
            if(increase) {
                if (quantity == 0)
                    formik.setFieldValue(`extraEquipment[${props.reference}].checked`, true)
                if(quantity < props.max)
                    formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, quantity + 1)
            }else {
                if(quantity > 1)
                    formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, quantity - 1)
                else if(quantity == 1) {
                    formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, 0)
                    formik.setFieldValue(`extraEquipment[${props.reference}].checked`, false)
                }

            }
        }

    }
    return (
            <Card sx={{backgroundColor:palette.primary.light, color:`${checked ? palette.primary.contrastText : palette.primary.dark}`}}  className={' relative w-fit min-w-[170px] h-[220px] flex flex-col justify-center items-center'}>
                <Box className={'w-full flex absolute top-0'}>
                    <Checkbox sx={{'&.Mui-checked':{color:palette.primary.main}}} onClick={handleClick} checked={checked}/>
                </Box>
                <img className={'mb-6'} onBeforeInput={handleBlur} onClick={handleClick} width={100}  src={props.img}/>
                <Box className={'bottom-0 absolute'}>
                    {checked && <Box className={'flex justify-center'}>
                        <IconButton  onClick={handleQuantityChange(false)} sx={{color:palette.primary.main}}><RemoveCircleOutline fontSize={'large'}/></IconButton>
                        <Typography variant={'h5'} color={'primary'} className={'flex items-center'}>{quantity}</Typography>
                        <IconButton  onClick={handleQuantityChange(true)} sx={{color:palette.primary.main}}><AddCircleOutline fontSize={'large'}/></IconButton>
                    </Box>}
                    <Typography variant={'h6'} sx={{color:palette.text.primary}} className={'font-bold w-full text-center'}>{props.name}</Typography>
                </Box>
            </Card>
    );
};

export default ExtraEquipmentCard;