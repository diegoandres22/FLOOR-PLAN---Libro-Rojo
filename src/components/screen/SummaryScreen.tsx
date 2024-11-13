import React from 'react'
import { Squares } from '../sections/Summary/Squares'

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

export const SummaryScreen = () => {

    return (
        <div>
            <Squares openStores={openStores} missings={missings} sadness={sadness} maintenance={maintenance} />
        </div>
    )
}
