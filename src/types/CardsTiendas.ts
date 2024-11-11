
type Tiendaalt = 'dmg' | 'makai' | 'macuto' | 'all';

export interface IconAndStateProps {
    tienda: Tiendaalt;
    estado: 'abierto' | 'cerrado' | 'n/a';
    ubi: string;

}

export interface TiendaData {
    id: number;
    ubi: string;
    alt: Tiendaalt;
    estado: 'abierto' | 'cerrado' | 'n/a';
    apertura: string;
    cierre: string;

}