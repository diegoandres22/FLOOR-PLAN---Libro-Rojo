
interface ProjectionData {
    proyeccion: string;
    sistema: number;
    producir: number;
}

interface FaltantData {
    id: number;
    nombre: string;
}
export interface IconAndStateProps {
    tienda: string;
    estado: string;
    ubi: string;
}
export interface ProyectionsAndFaltantsProps {
    projections: ProjectionData[];
    faltants: FaltantData[];
}
export interface ChecksProps {
    aceite: boolean;
    ultVez: string;
    inventario: boolean;
}
export interface ManagersProps {
    apertura: string;
    cierre: string;
}

export interface TiendaData {
    id: number;
    ubi: string;
    alt: string;
    estado: string;
    apertura: string;
    cierre: string;
    aceiteBoo: boolean;
    ultVez: string;
    inventarioBoo: boolean;
    projections: ProjectionData[];
    faltants: FaltantData[];
}