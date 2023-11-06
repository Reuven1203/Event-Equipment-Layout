import {FC, useState} from 'react';
import {Card, Checkbox} from '@mui/material';

const ExtraEquipmentCard:FC<{name: string, img: any, max: number}> = (props) => {
    const [selected, setSelected] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const handleClick = () => {
        if(!selected)
            setQuantity(1)
        else
            setQuantity(0)
        setSelected(!selected)

    }
    const handleQuantityChange = (e: any) => {
        if(selected && e.target.value === '0')
            setSelected(false)
        else if(!selected && e.target.value !== '0')
            setSelected(true)
        setQuantity(e.target.value)
    }
    return (
        <>
            <Card  className={'relative w-fit min-w-[200px] h-[200px] flex flex-col justify-center items-center'}>
                <div className={'w-full flex absolute top-0'}>
                    <Checkbox onClick={handleClick} checked={selected}/>
                    <div className={'flex align-middle items-center'}>
                        <h3 className={'flex justify-end items-center pr-4 font-light'}>Quantity</h3>
                        <input min={0} max={props.max} onChange={handleQuantityChange} value={quantity} className={'w-[50px] h-fit outline-none'} type='number'/>
                    </div>
                </div>
                <img className={''} onClick={handleClick} width={100} height={100}  src={props.img}/>
                <h1 className={'font-bold absolute bottom-0'}>{props.name}</h1>
            </Card>

        </>


    );
};

export default ExtraEquipmentCard;