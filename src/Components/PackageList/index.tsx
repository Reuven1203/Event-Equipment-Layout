import React, { FC, useState, useCallback } from 'react';
import PackageSelector from '../PackageSelector';
import { equipmentList } from '../../lib/equipment';
import SwipeableViews from 'react-swipeable-views';
import CustomizableSelector from '../CustomizableSelector';
import { Swipe } from '@mui/icons-material';

const { speaker, bass, booth, movingHead } = equipmentList;

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
    },
]

const PackageList: FC<{ onPackageSelect: any }> = (props) => {
    const [selectedPackage, setSelectedPackage] = useState(1);

    const onPackageSelect = (packageType: number) => {
        props.onPackageSelect(packageType);
        setSelectedPackage(packageType);
    }

    const handleSwipeChange = (index: number) => {
        onPackageSelect(index);
    }

    return (
        <>
            <div className={'sm:hidden w-full'}>
                <SwipeableViews index={selectedPackage} onChangeIndex={handleSwipeChange}>
                    {packs.map((pack: any) => (
                        <div key={pack.index} className={'w-full flex justify-center'}>
                            <PackageSelector onClick={onPackageSelect} index={pack.index} title={pack.title} items={pack.items} basePrice={pack.basePrice} isSelected={selectedPackage === pack.index} />
                        </div>
                    ))}
                    <div key={100} className={'w-full flex justify-center'}>
                   <CustomizableSelector isSelected={selectedPackage === 100} onClick={onPackageSelect}/>
                    </div>
                </SwipeableViews>
                <div className={'w-full flex justify-center mt-3'}>
                    <Swipe sx={{color:'white'}}/>
                </div>
            </div>
            <div className={`max-sm:hidden flex space-x-10 overflow-x-scroll h-full items-center justify-center`}>
                {packs.map((pack) => (
                    <PackageSelector key={pack.index} index={pack.index} onClick={onPackageSelect} title={pack.title} items={pack.items} basePrice={pack.basePrice} isSelected={selectedPackage === pack.index} />
                ))}
                <h1 className={'text-4xl text-white'}>OR</h1>
                <CustomizableSelector isSelected={selectedPackage === 100} onClick={onPackageSelect} />
            </div>
        </>
    );
};

export default React.memo(PackageList);
