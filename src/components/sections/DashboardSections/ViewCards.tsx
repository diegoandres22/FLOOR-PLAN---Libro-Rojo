
import React from 'react';
import { CardsTienda } from '@/components/elements';

type Tiendaalt = 'dmg' | 'makai' | 'macuto' | 'all';

interface TiendaData {
    id: number;
    ubi: string;
    alt: Tiendaalt;
    estado: 'abierto' | 'cerrado' | 'n/a';
}

const tiendasData: TiendaData[] = [
    { id: 1, ubi: "La Guaira", alt: 'dmg', estado: 'abierto' },
    { id: 2, ubi: "La Guaira", alt: 'makai', estado: 'cerrado' },
    { id: 4, ubi: "Macuto", alt: 'macuto', estado: 'abierto' },
    { id: 3, ubi: "Caribe", alt: 'all', estado: 'n/a' },
    { id: 5, ubi: "Maiquetía", alt: 'dmg', estado: 'abierto' },
];

export const ViewCards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 pt-2'>
            {tiendasData.map((tienda) => (
                <CardsTienda key={tienda.id} tienda={tienda.alt} estado={tienda.estado} ubi={tienda.ubi} />
            ))}
        </div>
    );
};


