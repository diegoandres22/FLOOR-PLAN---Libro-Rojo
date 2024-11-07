
import React from 'react'
import { NavbarSec } from '@/components/sections';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='bg-fondo w-[95vw] mx-auto rounded-xl pt-4'>
            <NavbarSec  />
            {children}
        </div>
    )
}
