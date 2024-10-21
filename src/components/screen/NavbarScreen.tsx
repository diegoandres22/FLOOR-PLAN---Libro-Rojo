'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import { NavbarTabsSec, NavbarSec } from '../sections/index';

export const NavbarScreen = () => {

    const pathname = usePathname();

    if (pathname === '/' || pathname === '/404') {
        return null;
    }

    return (
        <div>
            <NavbarSec isAdmin={false} locationLabel={"Maiquetía"} userLabel={"Daisy Lovato "} />
            <NavbarTabsSec/>
        </div>
    )
}
