import React, {JSX, ReactNode} from 'react';
import {ReactComponent as Speaker} from './SVG Files/Speaker + stand.svg';
import {ReactComponent as Booth} from './SVG Files/Booth.svg';
import {ReactComponent as SpeakerWithBass} from './SVG Files/Speaker + bass.svg';
import {ReactComponent as MovingHead} from './SVG Files/Moving head.svg';
import {ReactComponent as Gigbar} from './SVG Files/Gigbar with stand.svg';
import {ReactComponent as BoothWithLights} from './SVG Files/BoothWithLights.svg';
import { FC } from 'react';

type allowedStrings =  "Booth" | 'SpeakerWithBass' | "MovingHead" | "Gigbar" | 'Speaker' | 'BoothWithLights';
interface EquipmentType {
    component: allowedStrings;
    svgHeightToWidthRatio: number;
    width?: number;
    height?: number;
}

const Equipment: EquipmentType[] = [
    {
        component: "Speaker",
        svgHeightToWidthRatio: 3,
        width: 120,
        height: 360

    },
    {
        component: "Booth",
        svgHeightToWidthRatio: 0.81,
        width:340,
        height: 276

    },
    {
        component: "SpeakerWithBass",
        svgHeightToWidthRatio: 3.28,
        width: 140,
        height: 460
    },
    {
        component: "MovingHead",
        svgHeightToWidthRatio: 6.5,
        width: 80,
        height:450

    },
    {
        component:'BoothWithLights',
        svgHeightToWidthRatio: 0.81,
        width:340,
        height: 276
    }]




const EquipmentComponent:FC<{component: allowedStrings, width?: number, height?:number}> = (props) => {
    if(props.width && props.height) {
        throw new Error("width and height props are mutually exclusive");
    }
    const mapStringToComponent = (component: string): ReactNode => {
        const equipmentEntry = Equipment.find((equipment) => equipment.component === component);
        if(!equipmentEntry) {
            return <div>{component}</div>
        }else if(equipmentEntry) {
            const ratio = equipmentEntry.svgHeightToWidthRatio;
            const width = props.width ? props.width : props.height? props.height / ratio : equipmentEntry.width;
            const height = props.height ? props.height : props.width? props.width * ratio : equipmentEntry.height
            switch (component) {
                case "Booth":
                    return <Booth width={width} height={height} style={{height: '90%'}}/>;
                case "SpeakerWithBass":
                    return <SpeakerWithBass width={width} height={height} style={{height: '90%'}} />;
                case "MovingHead":
                    return <MovingHead width={width} height={height} style={{height: '90%'}} />;
                case "Gigbar":
                    return <Gigbar width={width} height={height} style={{height: '90%'}} />;
                case "Speaker":
                    return <Speaker width={width} height={height} style={{height: '90%'}} />;
                case "BoothWithLights":
                    return <BoothWithLights width={width} height={height} style={{height: '90%'}} />;




                default:
                    return <Booth width={width} height={height} />;
            }
        }

    }

    // }

    return (
      mapStringToComponent(props.component) as JSX.Element
    )


    }

export default EquipmentComponent;