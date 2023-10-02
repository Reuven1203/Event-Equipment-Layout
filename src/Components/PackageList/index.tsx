import React, {FC, useState} from 'react';
import PackageSelector from '../PackageSelector';
import {equipmentList} from '../../lib/equipment';
import SwipeableViews from 'react-swipeable-views';
const {speaker, bass, booth, movingHead} = equipmentList;
const basicPack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 2
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    }
];
const standardPack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 2
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    },
    {
        name: bass.name,
        price: bass.price,
        quantity: 2
    }
];

const deluxePack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 4,
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    },
    {
        name: bass.name,
        price: bass.price,
        quantity: 2
    },
    {
        name: movingHead.name,
        price: movingHead.price,
        quantity: 2
    },
    ]

const packs = [
    {
        index: 0,
        title: 'Basic',
        items: basicPack,
        basePrice: 500
    },
    {
        index: 1,
        title: 'Standard',
        items: standardPack,
        basePrice: 600
    },
    {
        index: 2,
        title: 'Deluxe',
        items: deluxePack,
        basePrice: 800
    }
    ]
const PackageList:FC<{onPackageSelect: any}> = (props) => {
    const [selectedPackage, setSelectedPackage] = useState(1);
    const onPackageSelect = (packageType: number) => {
        props.onPackageSelect(packageType);
        setSelectedPackage(packageType);
    }
    const screenWidth = window.innerWidth;
    const handleSwipeChange = (index: number) => {
       onPackageSelect(index);
    }

    const desktopStyle = 'flex space-x-0.5 overflow-x-scroll h-full items-center justify-center'

    return (
        <>
            <div className={'sm:hidden w-full'}>
            <SwipeableViews  index={selectedPackage} onChangeIndex={handleSwipeChange}>
                {packs.map((pack:any) => {
                    return (
                        <div className={'w-full flex justify-center'}>
                            <PackageSelector  onClick={onPackageSelect} index={pack.index} title={pack.title} items={pack.items} basePrice={pack.basePrice} isSelected={selectedPackage == pack.index ? true : false}/>
                        </div>
                    )
                })}
            </SwipeableViews>
        </div>
            <div className={`max-sm:hidden flex space-x-0.5 overflow-x-scroll h-full items-center justify-center`}>
                {packs.map((pack) => {
                    return (
                        <PackageSelector index={pack.index}  onClick={onPackageSelect} title={pack.title} items={pack.items} basePrice={pack.basePrice} isSelected={selectedPackage == pack.index ? true : false}/>
                    )
                }   )}

            </div>
        </>

    );
};

export default PackageList;