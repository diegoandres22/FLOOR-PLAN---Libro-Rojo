

import React from 'react'
import { CardsTienda } from '@/components/elements'

export const ViewCards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 pt-2'>
            <CardsTienda />
            <CardsTienda />
            <CardsTienda />
            <CardsTienda />
            <CardsTienda />
        </div>
    )
}
