import React from 'react'
import { Refresh, ViewCards } from '../sections'

export const DashboardScreen = () => {
    return (
        <div className='py-3 '>
            <Refresh />
            <ViewCards />
        </div>
    )
}
