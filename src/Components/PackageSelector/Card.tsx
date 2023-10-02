import {FC, ReactNode} from 'react';

interface Props {
    children : ReactNode
}
const Card:FC<Props> = ({children}) => {
    return (
        <div className={'bg-[#2E49A6] text-white p-5 shadow-2xl border-2 border-[#2E49A6] hover:border-[#0FBB6F] cursor-pointer w-[300px]'}>
            {children}
        </div>
    );
};

export default Card;