import {FC, useState} from 'react';
import {Card, Checkbox} from '@mui/material';
import {useForm} from '../../../../../Contexts/FormContext';

const ExtraEquipmentCard:FC<{reference:number, name: string, img: any, max: number}> = (props) => {
    const {formik} = useForm();
    const checked = formik.values.extraEquipment[props.reference].checked
    const quantity = formik.values.extraEquipment[props.reference].quantity
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
    const handleQuantityChange = (e: any) => {
        //check if value is not a number
        if(isNaN(e.target.value))
            return
        if(checked && e.target.value === '0'|| e.target.value === '')
            formik.setFieldValue(`extraEquipment[${props.reference}].checked`, false)
        else if(e.target.value > 0 )
            formik.setFieldValue(`extraEquipment[${props.reference}].checked`, true)
        if(e.target.value > props.max)
            formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, props.max)
        else
            formik.setFieldValue(`extraEquipment[${props.reference}].quantity`, e.target.value)
    }
    return (
        <>
            <Card sx={{backgroundColor:`${checked ? '#d8d7d7': '#F6F8FAFF'}`}}  className={' relative w-fit min-w-[170px] h-[200px] flex flex-col justify-center items-center'}>
                <div className={'w-full flex absolute top-0'}>
                    <Checkbox onClick={handleClick} checked={checked}/>
                    <div className={'flex align-middle items-center'}>
                        <h3 className={'flex justify-end items-center pr-2 font-light'}>Quantity</h3>
                        <input min={0} max={props.max} onChange={handleQuantityChange} value={quantity} className={'w-[50px] h-fit outline-black border-black border-[1.5px] rounded-xl pl-2'} type='number'/>
                    </div>
                </div>
                <img onBeforeInput={handleBlur} onClick={handleClick} width={100} height={100}  src={props.img}/>
                <h3 className={'font-bold absolute bottom-0'}>{props.name}</h3>
            </Card>

        </>


    );
};

export default ExtraEquipmentCard;