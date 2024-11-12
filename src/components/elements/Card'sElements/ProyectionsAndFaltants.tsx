

import React from 'react';
import { ProyectionsAndFaltantsProps } from '@/types';


export const ProyectionsAndFaltants: React.FC<ProyectionsAndFaltantsProps> = ({
    projections,
    faltants,
}) => {

    const firstColumn = projections.slice(0, 6);
    const secondColumn = projections.slice(6, 12);

    return (
        <div className='w-full flex mt-1 justify-between text-sm border-1 border-black/20 rounded-lg'>
            {/* Sección de Proyecciones */}
            <div className="flex w-3/4 flex-col border-r-1 border-black/20">
                <div className="flex justify-evenly text-xs">
                    {/* Primera columna */}
                    <div className="flex flex-col">
                        <div className='flex gap-2 justify-between font-extrabold'>
                            <p>Producción</p>
                            <p>kg</p>
                        </div>
                        {firstColumn.map((item, i) => (
                            <div
                                key={i}
                                className={`flex gap-2 justify-between ${i % 2 !== 0 ? 'bg-black/10' : ''
                                    }`}
                            >
                                <p>{item.proyeccion}</p>
                                <p
                                    className={`font-extrabold ${item.producir < item.sistema
                                        ? 'text-red-600'
                                        : item.producir === item.sistema
                                            ? 'text-green-600'
                                            : 'text-yellow-700'
                                        }`}
                                >
                                    {item.producir}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Segunda columna */}
                    <div className="flex flex-col">
                    <div className='flex gap-2 justify-between font-extrabold'>
                            <p>Suministro</p>
                            <p>Uni</p>
                        </div>
                        {secondColumn.map((item, i) => (
                            <div
                                key={i}
                                className={`flex gap-2 justify-between ${i % 2 !== 0 ? 'bg-black/10' : ''
                                    }`}
                            >
                                <p>{item.proyeccion}</p>
                                <p
                                    className={`font-extrabold ${item.producir < item.sistema
                                        ? 'text-red-600'
                                        : item.producir === item.sistema
                                            ? 'text-green-600'
                                            : 'text-yellow-700'
                                        }`}
                                >
                                    {item.producir}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sección de Faltantes */}
            <div className="flex flex-col w-1/4 text-center font-semibold">
                <p>Faltantes</p>
                <div className="w-auto text-xs font-bold text-red-500 pt-1 shadow-sm">
                    {faltants.length > 0 ? (
                        faltants.map((faltant) => (
                            <p key={faltant.id}>{faltant.nombre}</p>
                        ))
                    ) : (
                        <p>No hay faltantes</p>
                    )}
                </div>
            </div>
        </div>
    );
};

