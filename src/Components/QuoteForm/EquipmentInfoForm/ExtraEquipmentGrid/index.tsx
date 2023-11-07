import React, {FC} from 'react';
import {Checkbox} from '@mui/material';
import ExtraEquipmentCard from './ExtraEquipmentCard';
import Microphone from '../../../Equipment/PNG files/microphone.png';
import FloorLED from '../../../Equipment/PNG files/FloorLED.png';
import FogMachine from '../../../Equipment/PNG files/FogMachine.png';
import Gigbar from '../../../Equipment/PNG files/Gigbar.png';
import {useForm} from '../../../../Contexts/FormContext';
const ExtraEquipmentGrid:FC = (props) => {
   const {formik} = useForm();
    const extraEquipment = [{
       id: 0,
         name: 'Microphone',
        png: Microphone,
        max: 2,
    },
        {
            id: 1,
            name: 'Dice Floor LED',
            png: FloorLED,
            max: 15,
        },
        {
            id: 2,
            name: 'Fod Machine',
            png: FogMachine,
            max: 2,
        },
        {
            id: 3,
            name: 'Gigbar',
            png: Gigbar,
            max: 2,
        }
    ]
    return (
        <div className={'flex w-full max-w-[635px] space-x-5 overflow-x-scroll h-fit p-3'}>
            {extraEquipment.map((item) => {
                return <ExtraEquipmentCard key={item.id} reference={item.id}  name={item.name} img={item.png} max={item.max}/>
            })}
        </div>
    );
};

export default ExtraEquipmentGrid;