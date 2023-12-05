import React, {useEffect, useState} from 'react';
import {Box, Container, Modal, Paper, SwipeableDrawer, useTheme} from '@mui/material';
import {usePackage} from '../../Contexts/PackageContext';
import {ExpandMore} from '@mui/icons-material';
import QuoteForm from '../QuoteForm';
import {useForm} from '../../Contexts/FormContext'

const QuoteModal = () => {
    const {isModalOpen, openModalHandler, selectedPackage} = usePackage();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const onCloseHandler = () => {
        openModalHandler(false);
    }
    const {palette} = useTheme();



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



    return (
        <>
            {windowWidth > 800 ?
                <Modal open={isModalOpen} onClose={onCloseHandler}>
                    <Paper className={'p-4 space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-[800px] min-h-[700px] max-h-[700px]'}>
                        <QuoteForm/>
                    </Paper>
                </Modal>
            :
                    <SwipeableDrawer className={'h-screen'} anchor={'bottom'} open={isModalOpen} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                        <Container className={'h-[90vh] overflow-hidden'}>
                            <ExpandMore onClick={toggleDrawer(false)} fontSize={'large'} sx={{color:palette.primary.dark, width:'100%'}}/>
                            <QuoteForm/>
                        </Container>
                    </SwipeableDrawer>
            }

        </>

    );
};

export default QuoteModal;