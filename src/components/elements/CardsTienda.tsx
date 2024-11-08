import React from 'react';
import { IconAndState } from './Card\'sElements';
import { IconAndStateProps } from '@/types';


export const CardsTienda: React.FC<IconAndStateProps> = ({ tienda, estado, ubi }) => {
    return (
        <div className='w-96 h-80 bg-white rounded-[30px] p-4 shadow-2xl shadow-neutral-500 transform transition duration-300 hover:scale-95 cursor-pointer'>
            <IconAndState tienda={tienda} estado={estado} ubi={ubi} />
        </div>
    );
};

