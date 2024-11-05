'use client'

import React from 'react'
import { NavbarSec } from '../sections'
import { usePathname } from 'next/navigation';
import { Stores } from '../sections/AdminSections/Stores';

export default function AdminScreen() {

    const pathname = usePathname();

    if (pathname === '/' || pathname === '/404') {
        return null;
    }

    return (
        <div>
            <NavbarSec  />
            <Stores/>
        </div>
    )
}
