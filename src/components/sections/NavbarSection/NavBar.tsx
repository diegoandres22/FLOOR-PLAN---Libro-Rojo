'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { NavbarElements } from '@/components/elements/NavbarElements';




export const NavBar = () => {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/404') {
    return null;
  }

  return (
    <NavbarElements isAdmin={false} locationLabel={"Maiquetía"} userLabel={"Daisy Lovato "} />

  );
};
