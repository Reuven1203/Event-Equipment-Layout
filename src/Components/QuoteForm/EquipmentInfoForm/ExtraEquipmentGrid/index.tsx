import React, {FC} from 'react';
import {Box, Checkbox} from '@mui/material';
import ExtraEquipmentCard from './ExtraEquipmentCard';
import Microphone from '../../../Equipment/PNG files/microphone.png';
import FloorLED from '../../../Equipment/PNG files/FloorLED.png';
import FogMachine from '../../../Equipment/PNG files/FogMachine.png';
import Gigbar from '../../../Equipment/PNG files/Gigbar.png';
const ExtraEquipmentGrid:FC = (props) => {
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
        },
    ]
    return (
        <Box className={'flex  space-x-5 overflow-x-scroll h-fit pb-3'}>
            {extraEquipment.map((item) => {
                return <ExtraEquipmentCard key={item.id} reference={item.id}  name={item.name} img={item.png} max={item.max}/>
            })}
        </Box>
    );
};

export default ExtraEquipmentGrid;