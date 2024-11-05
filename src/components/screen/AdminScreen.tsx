'use client'

import React from 'react'
import { NavbarSec } from '../sections'
import { usePathname } from 'next/navigation';

export default function AdminScreen() {

    const pathname = usePathname();

    if (pathname === '/' || pathname === '/404') {
        return null;
    }

    return (
        <div>
            <NavbarSec isAdmin={false} locationLabel={"admin"} userLabel={"victor"} />

        </div>
    )
}
