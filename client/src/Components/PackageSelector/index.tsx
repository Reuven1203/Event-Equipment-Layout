import {FC} from 'react';
import { usePackage } from '../../Contexts/PackageContext';
import {Box, Button, Card, List, ListItem, ListItemText, Typography} from '@mui/material';
import {useTheme} from '@mui/material';

interface item {
    name: string;
    price: number;
    quantity: number;
}

const PackageSelector:FC<{index:number,title:string, items?:item[], price:number, onClick:(arg:number)=> void,isSelected:boolean}> = (props) => {
    const {onPackageSelect,openModalHandler, selectedPackage} = usePackage();
    const {palette} = useTheme();
    const onClickHandler = () => {
        if(props.index == selectedPackage) {
            openModalHandler(true);
        }else {
            onPackageSelect(props.index);
        }
    }
    const onGetQuoteClick = () => {
        openModalHandler(true);
    }
    const toggleAnimation = () => {
        if (props.isSelected) {
            return 'sm:animate-expand';
        } else {
            return 'sm:animate-shrink hover:opacity-[0.8]';
            }
    }
    return (
        <Card raised  onClick={onClickHandler} className={`${toggleAnimation()} 
          border-2 p-3
        sm:cursor-pointer max-sm:w-[80%] w-[230px] relative hover:animate-pulse max-sm:h-[300px]
        `}>
            <Typography variant={'h4'} className={'w-full text-center'}>{props.title}</Typography>
            <Box>
                <Typography variant={'h6'} fontWeight={500} className={'w-full text-center'}>Estimated Price</Typography>
                <Typography variant={'h5'} className={'w-full text-center'}> ${props.price}</Typography>
            </Box>
            {props.index === selectedPackage && <List className="overflow-y-scroll text-center">
                {props.items?.map((item) => {
                    return (
                        <Typography variant={'body1'}  key={item.name}>{item.quantity}x {item.name} </Typography>
                    )
                })}
            </List>}
                    <Typography variant={'h6'} sx={{backgroundColor: palette.primary.main, '&:hover': {backgroundColor: props.index === selectedPackage ? palette.primary.dark : ''}}}  className={`${props.index === selectedPackage && ''} border-t-2 absolute left-0 bottom-0 w-full text-center p-3`} >{props.index === selectedPackage ? 'Get a Quote' : 'Select to preview'}</Typography>
        </Card>

    );
};

export default PackageSelector;