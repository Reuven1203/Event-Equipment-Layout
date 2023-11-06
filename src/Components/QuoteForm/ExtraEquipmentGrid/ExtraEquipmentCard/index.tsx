import {FC, useEffect, useState} from 'react';
import {Card, Checkbox} from '@mui/material';

const ExtraEquipmentCard:FC<{name: string, img: any, max: number}> = (props) => {
    const [selected, setSelected] = useState<boolean>(false)
    const [quantity, setQuantity] = useState<number>(0)
    const handleClick = () => {
        if(!selected)
            setQuantity(1)
        else
            setQuantity(0)
        setSelected(!selected)

    }
    const handleBlur = () => {
        console.log('blurred')
        if(quantity === 0)
            setSelected(false)
        else if(quantity == null) {
            setQuantity(0)
            setSelected(false)
        }
    }
    const handleQuantityChange = (e: any) => {
        //check if value is not a number
        if(isNaN(e.target.value))
            return
        if(selected && e.target.value === '0'|| e.target.value === '')
            setSelected(false)
        else if(e.target.value > 0 )
            setSelected(true)
        if(e.target.value > props.max)
            setQuantity(props.max)
        else
        setQuantity(e.target.value)
    }
    return (
        <>
            <Card sx={{backgroundColor:'#F6F8FA'}}  className={' relative w-fit min-w-[170px] h-[200px] flex flex-col justify-center items-center'}>
                <div className={'w-full flex absolute top-0'}>
                    <Checkbox onClick={handleClick} checked={selected}/>
                    <div className={'flex align-middle items-center'}>
                        <h3 className={'flex justify-end items-center pr-2 font-light'}>Quantity</h3>
                        <input min={0} max={props.max} onChange={handleQuantityChange} value={quantity} className={'w-[50px] h-fit outline-black border-black border-[1.5px] rounded-xl pl-2'} type='number'/>
                    </div>
                </div>
                <img className={''} onBeforeInput={handleBlur} onClick={handleClick} width={100} height={100}  src={props.img}/>
                <h1 className={'font-bold absolute bottom-0'}>{props.name}</h1>
            </Card>

        </>


    );
};

export default ExtraEquipmentCard;