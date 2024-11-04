


export const columnClassNames = 'sm:text-lg sm:font-semibold';



export const produccion = (produccion: number, proyeccion: number, stock: number): string => {

    if (produccion > 0) {
        return produccion.toString();
    }

    const projectionNumber = Number(proyeccion);
    const stockNumber = Number(stock);

    if (projectionNumber > 0 && stockNumber > 0) {
        return (projectionNumber - stockNumber).toString();
    }

    return "";
};

export const validate0 = (number: number): string => {

    if (number > 0) {
        return number.toString();
    }
    return "";
};
