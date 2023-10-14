import {FC, ReactNode} from 'react';

interface Props {
    children : ReactNode;
    isSelected:boolean;
    onClick:()=>void;
    isCustomize?:boolean;
}
const Card:FC<Props> = ({children, isSelected,onClick, isCustomize}) => {

    const toggleAnimation = () => {
        if (isSelected) {
            if (!isCustomize) {
                return 'sm:animate-expand';
            } else {
                return 'sm:animate-showForm overflow-hidden';
            }
        } else {
            if (!isCustomize) {
                return 'sm:animate-shrink hover:opacity-[0.8]';
            } else {
                return 'sm:animate-hideForm overflow-hidden';
            }
        }
    }

    return (
        <div onClick={onClick}  className={`${toggleAnimation()} 
         rounded-2xl  bg-blue-light text-white  shadow-2xl 
        sm:cursor-pointer h-[300px] max-sm:w-[80%] w-[300px] relative shadow-custom-1 shadow-custom-2  `}>
            {children}
        </div>
    );
};

export default Card;