import React from 'react'
import { Squares, Refresh, StoreProgress, TabletsStores } from '../sections'

const openStores = {
    open: 4,
    close: 2,
    soon: 2,
};
const missings = {
    dmg: 12,
    makai: 12,
};
const sadness = {
    dmg: 14,
    makai: 14,
};
const maintenance = {
    dmg: 15,
    makai: 16,
};
const data1 = [
    { id: "1", producto: "Pescado", projection: 12, production: 52 },
    { id: "2", producto: "Rolls de canela", projection: 21, production: 14 },
    { id: "3", producto: "Cheescake", projection: 62, production: 32 },
    { id: "4", producto: "Hamburguesas basic", projection: 2, production: 44 },
];
const data2 = [
    { id: "1", producto: "gallina", projection: 12, production: 52 },
    { id: "2", producto: "gato de 120gr", projection: 21, production: 14 },
    { id: "3", producto: "milkshake", projection: 62, production: 32 },
    { id: "4", producto: "Hamburguesas grnade 180gr", projection: 2, production: 44 },
];


export const SummaryScreen = () => {

    return (
        <div className='pt-2'>
            <Refresh />
            <Squares openStores={openStores} missings={missings} sadness={sadness} maintenance={maintenance} />
            <StoreProgress percentage={50} color={1} />
            <TabletsStores dmg={data1} makai={data2}/>
        </div>
    )
}
