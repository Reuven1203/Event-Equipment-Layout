import React from 'react';
import {Modal, SwipeableDrawer} from '@mui/material';
import {usePackage} from '../../Contexts/PackageContext';
import {ExpandMore} from '@mui/icons-material';
import QuoteForm from '../QuoteForm';
import {useForm} from '../../Contexts/FormContext'

const QuoteModal = () => {
    const {isModalOpen, openModalHandler, selectedPackage} = usePackage();
    const onCloseHandler = () => {
        openModalHandler(false);
    }


    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        openModalHandler(open);
    }

    const screenWidth = window.screen.width;

    return (
        <>
            {screenWidth > 450 ? <div>
                <Modal open={isModalOpen} onClose={onCloseHandler}>
                    <div className={'p-4 space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[700px] min-h-[700px]'}>
                        <QuoteForm/>
                    </div>
                </Modal>
            </div> :
                    <SwipeableDrawer className={'h-screen'} anchor={'bottom'} open={isModalOpen} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                        <div className={'h-[90vh] overflow-hidden'}>
                            <ExpandMore onClick={toggleDrawer(false)} fontSize={'large'} sx={{color:'black', width:'100%'}}/>
                            <QuoteForm/>
                        </div>
                    </SwipeableDrawer>
            }

        </>

    );
};

export default QuoteModal;