
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
    name: string;
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
export interface ProgressBarProps {
    percentage: number;
    color: number;
}

export interface TiendaData {
    id: number;
    name: string;
    ubi: string;
    alt: string;
    state: string;
    manager1: string;
    manager2: string;
    oilBoo: boolean;
    oilLast: string;
    inventoryBoo: boolean;
    projections: ProjectionData[];
    outOfStock: FaltantData[];
    percentage: number;
    color: number;
}