
import React from 'react';
import { CardsTienda } from '@/components/elements';
import { TiendaData } from '@/types';

const tiendasData: TiendaData[] = [
    { id: 1, ubi: "La Guaira", alt: 'dmg', estado: 'abierto', apertura: 'Diego', cierre: 'Angel' },
    { id: 2, ubi: "La Guaira", alt: 'makai', estado: 'cerrado', apertura: 'Yaniret', cierre: 'Carmen' },
    { id: 4, ubi: "Macuto", alt: 'macuto', estado: 'abierto', apertura: 'Manuel', cierre: '' },
    { id: 3, ubi: "Caribe", alt: 'all', estado: 'n/a', apertura: 'Daisy', cierre: 'n/a' },
    { id: 5, ubi: "Maiquetía", alt: 'dmg', estado: 'abierto', apertura: 'Fran', cierre: '' },
];

export const ViewCards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 pt-2'>
            {tiendasData.map((tienda) => (
                <CardsTienda key={tienda.id} {...tienda} />
            ))}
        </div>
    );
};


