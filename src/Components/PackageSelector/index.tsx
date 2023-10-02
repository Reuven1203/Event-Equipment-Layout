import {FC, useState} from 'react';

interface item {
    name: string;
    price: number;
    quantity: number;
}

const PackageSelector:FC<{index:number,title:string, items?:item[], basePrice:number, onClick:(arg:number)=> void,isSelected:boolean}> = (props) => {
    const equipmentPrice = props.items?.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }
    , 0);
    const onClickHandler = () => {
        props.onClick(props.index);
    }
    // const desktopStyle = {`${props.isSelected ? 'md:animate-expand' : 'md:animate-shrink hover:opacity-[0.8]'} h-[350px]  bg-[#2E49A6] text-white  shadow-2xl border-2 border-[#2E49A6] cursor-pointer w-[300px] relative max-md:w-[full]`}
    return (
        <div onClick={onClickHandler} className={`${props.isSelected ? 'sm:animate-expand' : 'sm:animate-shrink hover:opacity-[0.8]'} sm:h-[350px] h-[300px]  bg-[#2E49A6] text-white  shadow-2xl border-2 border-[#2E49A6] sm:cursor-pointer max-sm:w-[80%] w-[300px] relative `}>
            <h1 className={'text-[30px] w-full text-center p-2'}>{props.title}</h1>
            <div>
                <h2 className={'w-full text-center'}>Estimated Price:</h2>
                <h1 className={'w-full text-center text-4xl'}> ${equipmentPrice && equipmentPrice + props.basePrice}</h1>
            </div>
               <ul className="text-[20px] overflow-y-scroll text-center max-h-[40%]">
                   {props.items?.map((item) => {
                          return (
                            <li>{item.quantity}x {item.name} </li>
                          )
                   })}
               </ul>
               <div className={'absolute bottom-0  w-full p-3'}>
                   <button className='bg-white text-black rounded-2x w-full'>Get a quote</button>
               </div>
       </div>
    );
};

export default PackageSelector;