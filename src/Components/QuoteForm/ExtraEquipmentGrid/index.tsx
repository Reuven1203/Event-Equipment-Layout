import React, {FC} from 'react';
import {Checkbox} from '@mui/material';
import ExtraEquipmentCard from './ExtraEquipmentCard';
import Microphone from '../../Equipment/PNG files/microphone.png';
import FloorLED from '../../Equipment/PNG files/FloorLED.png';
import FogMachine from '../../Equipment/PNG files/FogMachine.png';
import Gigbar from '../../Equipment/PNG files/Gigbar.png';
const ExtraEquipmentGrid:FC<{formik:any}> = (props) => {
    const {formik} = props
    return (
        <div className={'flex w-full max-w-[635px] space-x-5 overflow-x-scroll h-fit p-3'}>
            <ExtraEquipmentCard img={Microphone} name={'Microphone'} max={2}/>
            <ExtraEquipmentCard img={FloorLED} name={'DICE Floor LED'} max={15}/>
            <ExtraEquipmentCard img={FogMachine} name={'Fog Machine'} max={2}/>
            <ExtraEquipmentCard img={Gigbar} name={'Gigbar'} max={2}/>
        </div>
    );
};

export default ExtraEquipmentGrid;