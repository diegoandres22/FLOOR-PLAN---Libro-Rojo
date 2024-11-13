export interface SquaresProps {
    openStores: {
        open: number;
        close: number;
        soon: number;
    };
    missings: {
        dmg: number;
        makai: number;
    };
    sadness: {
        dmg: number;
        makai: number;
    };
    maintenance: {
        dmg: number;
        makai: number;
    };
}

export interface ProductoData {
    id: string;
    producto: string;
    projection: number;
    production: number;
}

export interface TabletsStoresProps {
    dmg: ProductoData[];
    makai: ProductoData[];
}