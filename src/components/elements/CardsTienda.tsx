import React from 'react';
import { IconAndState, Managers, ProyectionsAndFaltants } from './Card\'sElements';
import { TiendaData } from '@/types';


export const CardsTienda: React.FC<TiendaData> = ({ alt, estado, ubi, apertura, cierre }) => {

    const projections = [
        { id: 10, proyeccion: 'Lechuga', sistema: 12, producir: 12 },
        { id: 1, proyeccion: 'Arroz con misura', sistema: 10, producir: 8 },
        { id: 2, proyeccion: 'Algas', sistema: 40, producir: 42 },
        { id: 3, proyeccion: 'Pico de gallo', sistema: 14, producir: 14 },
        { id: 4, proyeccion: 'Queso Picorino', sistema: 55, producir: 56 },
        { id: 5, proyeccion: 'Hamb. carne Peq', sistema: 35, producir: 37 },
        { id: 6, proyeccion: 'Hamb. carne gran', sistema: 10, producir: 8 },
        { id: 7, proyeccion: 'Hamb. pollo Peq', sistema: 40, producir: 42 },
        { id: 8, proyeccion: 'Hamb. pollo Gran', sistema: 14, producir: 14 },
        { id: 9, proyeccion: 'Camarones', sistema: 85, producir: 81 }
    ];

    const faltants = [
        { id: 1, nombre: 'Pepsi Light' },
    ];

    return (
        <div className='w-96 h-80 bg-white rounded-[30px] p-4 shadow-2xl shadow-neutral-500 transform transition duration-300 hover:scale-95 cursor-pointer'>
            <IconAndState estado={estado} ubi={ubi} tienda={alt} />
            <Managers apertura={apertura} cierre={cierre} />
            <ProyectionsAndFaltants projections={projections} faltants={faltants} />
        </div>
    );
};

