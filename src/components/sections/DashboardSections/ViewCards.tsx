
import React from 'react';
import { CardsTienda } from '@/components/elements';
import tiendasData from "@/../../public/TiendasCards.json"



export const ViewCards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 pt-2'>
            {tiendasData.map((tienda) => (
                <CardsTienda key={tienda.id} {...tienda} />
            ))}
        </div>
    );
};


