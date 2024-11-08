import React from 'react'
import { Refresh, ViewCards } from '../sections'

export const DashboardScreen = () => {
    return (
        <div className='pt-3 h-[88vh]'>
            <Refresh />
            <ViewCards />
        </div>
    )
}
