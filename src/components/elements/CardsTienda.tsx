import React from 'react';
import { IconAndState, Managers } from './Card\'sElements';
import { TiendaData } from '@/types';


export const CardsTienda: React.FC<TiendaData> = ({ alt, estado, ubi, apertura, cierre }) => {
    return (
        <div className='w-96 h-80 bg-white rounded-[30px] p-4 shadow-2xl shadow-neutral-500 transform transition duration-300 hover:scale-95 cursor-pointer'>
            <IconAndState estado={estado} ubi={ubi} tienda={alt} />
            <Managers apertura={apertura} cierre={cierre} />
        </div>
    );
};

