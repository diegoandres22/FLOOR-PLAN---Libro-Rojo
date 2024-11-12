

import React from 'react';
import { ProyectionsAndFaltantsProps } from '@/types';


export const ProyectionsAndFaltants: React.FC<ProyectionsAndFaltantsProps> = ({
    projections,
    faltants,
}) => {
    // Dividimos el array de proyecciones en dos columnas
    const firstColumn = projections.slice(0, 5);
    const secondColumn = projections.slice(5, 10);

    return (
        <div className='w-full flex mt-1 justify-between text-sm border-1 border-black/20 rounded-lg'>
            {/* Sección de Proyecciones */}
            <div className="flex w-3/4 flex-col border-r-1 border-black/20">
                <p className='font-semibold mx-auto'>Proyecciones</p>
                <div className="flex justify-evenly text-xs">
                    {/* Primera columna */}
                    <div className="flex flex-col">
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



// import React from 'react'

// export const ProyectionsAndFaltants = () => {
//     return (
//         <div className='w-full flex mt-1 justify-between text-sm border-1 border-black/20 rounded-lg'>
//             <div className="flex w-3/4 flex-col border-r-1 border-black/20">
//                 <p className='font-semibold mx-auto'> Proyecciones</p>
//                 <div className="flex justify-evenly text-xs  ">
//                     <div className="flex flex-col ">
//                         <div className="flex gap-2 justify-between"><p>Arroz con misura</p><p className='font-extrabold text-red-600'>12</p></div>
//                         <div className="flex gap-2 justify-between bg-black/10"><p>Algas</p><p className='font-extrabold text-yellow-700'>42</p></div>
//                         <div className="flex gap-2 justify-between"><p>Pico de gallo</p><p className='font-extrabold text-green-600'>14</p></div>
//                         <div className="flex gap-2 justify-between bg-black/10"><p>Queso Picorino</p><p className='font-extrabold text-yellow-700'>87</p></div>
//                         <div className="flex gap-2 justify-between"><p>Set de vegetales</p><p className='font-extrabold text-yellow-700'>37</p></div>
//                     </div>
//                     <div className="flex flex-col ">
//                         <div className="flex gap-2 justify-between"><p>Hamburguesa Peq</p><p className='font-extrabold'>12</p></div>
//                         <div className="flex gap-2 justify-between bg-black/10"><p>Hamburguesa Grand</p><p className='font-extrabold'>8</p></div>
//                         <div className="flex gap-2 justify-between"><p>Mila. de pollo Peq</p><p className='font-extrabold'>24</p></div>
//                         <div className="flex gap-2 justify-between bg-black/10"><p>Mila. de pollo Grand</p><p className='font-extrabold'>20</p></div>
//                         <div className="flex gap-2 justify-between"><p>Camarones Peq</p><p className='font-extrabold'>42</p></div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col w-1/4 text-center font-semibold">
//                 <p >  Faltantes </p>
//                 <div className="w-auto  text-xs font-bold text-red-500 pt-1 shadow-sm" >
//                     <p>Pepsi Light</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
