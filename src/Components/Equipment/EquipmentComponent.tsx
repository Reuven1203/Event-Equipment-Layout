import React, {JSX, ReactNode} from 'react';
import {ReactComponent as Speaker} from './SVG Files/Speaker + stand.svg';
import {ReactComponent as Booth} from './SVG Files/Booth.svg';
import {ReactComponent as SpeakerWithBass} from './SVG Files/Speaker + bass.svg';
import {ReactComponent as MovingHead} from './SVG Files/Moving head.svg';
import {ReactComponent as Gigbar} from './SVG Files/Gigbar with stand.svg';
import {ReactComponent as BoothWithLights} from './SVG Files/BoothWithLights.svg';
import Speakerpng from './PNG files/speaker.png';
import Boothpng from './PNG files/Booth.png';
import SpeakerWithBasspng from './PNG files/Speaker + bass.png';
import MovingHeadpng from './PNG files/MovingHead.png';
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
        svgHeightToWidthRatio: 1,
        width: 146,

    },
    {
        component: "Booth",
        svgHeightToWidthRatio: 0.81,
        width:300,
        height:20

    },
    {
        component: "SpeakerWithBass",
        svgHeightToWidthRatio: 3.28,
        width: 100,
        height:80
    },
    {
        component: "MovingHead",
        svgHeightToWidthRatio: 6.5,
        width: 50,
        // height:4

    },
    {
        component:'BoothWithLights',
        svgHeightToWidthRatio: 0.81,
        width:300,
        height:20
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
                    // return <Booth width={width} height={height} style={{height: '90%'}}/>;
                    return <div className={'flex flex-col justify-end'}>
                        <img src={Boothpng} width={230}   alt='Booth' />
                    </div>;
                case "SpeakerWithBass":
                    // return <SpeakerWithBass width={width} height={height} style={{height: '90%'}} />;
                    return <div className={'w-[95px]'}>
                        <img src={SpeakerWithBasspng} alt={'Speaker with bass'} />
                    </div>
                case "MovingHead":
                    // return <MovingHead width={width} height={height} style={{height: '90%'}} />;
                    return <img src={MovingHeadpng} alt='Speaker' style={{width:'55px'}}/>;
                case "Gigbar":
                    return <Gigbar width={width} height={height} style={{height: '90%'}} />;
                case "Speaker":
                    return <div className={'w-[65px]'}>
                        <img src={Speakerpng} alt='Speaker'/>
                    </div>
                case "BoothWithLights":
                    // return <BoothWithLights width={width} height={height} style={{height: '90%'}} />;
                    return <div className={'flex flex-col justify-end'}>
                        <img src={Boothpng} width={230}   alt='Booth' />
                    </div>;



                default:
                    return <Booth width={width} height={height} />;
            }
        }

    }

    // }

    return (
        <div className={'min-w-[50px]  flex justify-center'}>
            {mapStringToComponent(props.component) as JSX.Element}
        </div>
    )


    }

export default EquipmentComponent;