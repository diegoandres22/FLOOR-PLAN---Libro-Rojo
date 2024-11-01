
export interface VariosProps {
    title: string;
    rows: {
        key: string;
        Producto: string;
        Proyección: number;
        Stock: number;
        Producción: number;
        listo: boolean;
    }[];
}