import React from 'react';
import { ChecksCard, IconAndState, Managers, ProgressBar, ProyectionsAndFaltants } from './Card\'sElements';
import { TiendaData } from '@/types';


export const CardsTienda: React.FC<TiendaData> = ({ alt, state, ubi, manager1, manager2, inventoryBoo, oilBoo, oilLast, outOfStock, projections, color, percentage, name }) => {


    return (
        <div className='w-96 h-80 bg-white rounded-[30px] p-4 shadow-2xl shadow-neutral-500 transform transition duration-300 hover:scale-95 cursor-pointer'>
            <IconAndState estado={state} ubi={ubi} tienda={alt} name={name} />
            <Managers apertura={manager1} cierre={manager2} />
            <ProyectionsAndFaltants projections={projections} faltants={outOfStock} />
            <ChecksCard ultVez={oilLast} aceite={oilBoo} inventario={inventoryBoo} />
            <ProgressBar percentage={percentage} color={color} ></ProgressBar>
        </div>
    );
};

