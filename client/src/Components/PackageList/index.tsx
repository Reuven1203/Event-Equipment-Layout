import React, { FC, useState } from 'react';
import PackageSelector from '../PackageSelector';
import { equipmentList } from '../../lib/equipment';
import SwipeableViews from 'react-swipeable-views';
import CustomizableSelector from '../CustomizableSelector';
import { Swipe } from '@mui/icons-material';
import { usePackage } from '../../Contexts/PackageContext';
import {packs} from '../../lib/packages';

const { speaker, bass, booth, movingHead } = equipmentList;




const PackageList: FC<{ onPackageSelect: any }> = (props) => {
   const {onPackageSelect, selectedPackage} = usePackage();
    const handleSwipeChange = (index: number) => {
        onPackageSelect(index);
    }

    const handleFormSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <>
            <div className={'sm:hidden w-full'}>
                <SwipeableViews index={selectedPackage} onChangeIndex={handleSwipeChange}>
                    {packs.map((pack: any) => (
                        <div key={pack.index} className={'w-full flex justify-center'}>
                            <PackageSelector onClick={onPackageSelect} index={pack.index} title={pack.title} items={pack.items} price={pack.price} isSelected={selectedPackage === pack.index} />
                        </div>
                    ))}
                </SwipeableViews>
                <div className={'w-full flex justify-center mt-3'}>
                    <Swipe sx={{color:'white'}}/>
                </div>
            </div>
            <div className={'flex mt-8 justify-center items-center'}>
                <div className={`w-full max-sm:hidden flex space-x-5 items-start  justify-center`}>
                    {packs.map((pack) => (
                        <PackageSelector key={pack.index} index={pack.index} onClick={onPackageSelect} title={pack.title} items={pack.items} price={pack.price} isSelected={selectedPackage === pack.index} />
                    ))}
                    {/*<h1 className={'text-4xl text-white'}>OR</h1>*/}
                    {/*<CustomizableSelector submitForm={handleFormSubmit} isSelected={selectedPackage === 100} onClick={onPackageSelect} />*/}
                </div>
            </div>

        </>
    );
};

export default React.memo(PackageList);
