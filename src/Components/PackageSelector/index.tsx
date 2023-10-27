import {FC} from 'react';
import Card from './Card';
import { usePackage } from '../../Contexts/PackageContext';

interface item {
    name: string;
    price: number;
    quantity: number;
}

const PackageSelector:FC<{index:number,title:string, items?:item[], basePrice:number, onClick:(arg:number)=> void,isSelected:boolean}> = (props) => {
    const {onPackageSelect} = usePackage();
    const equipmentPrice = props.items?.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }
    , 0);
    const onClickHandler = () => {
        onPackageSelect(props.index);
        props.onClick(props.index);
    }
    // const desktopStyle = {`${props.isSelected ? 'md:animate-expand' : 'md:animate-shrink hover:opacity-[0.8]'} h-[350px]  bg-[#2E49A6] text-white  shadow-2xl border-2 border-[#2E49A6] cursor-pointer w-[300px] relative max-md:w-[full]`}
    return (
        <Card isSelected={props.isSelected} onClick={onClickHandler}>
            <h2 className={'w-full text-center p-2'}>{props.title}</h2>
            <div>
                <h3 className={'w-full text-center'}>Estimated Price:</h3>
                <h3 className={'w-full text-center text-xl font-bold'}> ${equipmentPrice && equipmentPrice + props.basePrice}</h3>
            </div>
            <ul className="text-[13px] overflow-y-scroll text-center max-h-[40%]">
                {props.items?.map((item) => {
                    return (
                        <li>{item.quantity}x {item.name} </li>
                    )
                })}
            </ul>
            <div className={'absolute bottom-0  w-full p-3'}>
                <button className='bg-white text-black rounded-2x w-full'>Get a quote</button>
            </div>
        </Card>

    );
};

export default PackageSelector;