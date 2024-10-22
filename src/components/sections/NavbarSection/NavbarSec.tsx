import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from 'next/image';
import data from "@/../public/images/assets.json";
import { LuLogOut } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { NavBarProps } from '@/types';

export const NavbarSec: React.FC<NavBarProps> = ({ locationLabel, userLabel }) => {
    return (
        <Navbar shouldHideOnScroll className='bg-white rounded-xl shadow-lg mt-2'>
            <NavbarContent>
                <Image src={data[1].Image} alt={data[1].alt} width={50} height={50} />
                <h2 className='text-xs sm:text-lg font-black font-dmg'>Floor Plan</h2>
            </NavbarContent>

            <NavbarContent className="text-xs lg:text-lg sm:flex gap-4 ml-8" justify="center">
                <NavbarItem className='flex flex-col sm:flex-row'>
                    <h3 className='text-neutral-600 text-xs sm:text-lg font-bold'>
                        {locationLabel}
                    </h3>
                    <h4 className='hidden font-bold mx-1 sm:flex'>-</h4>
                    <h3 className='text-neutral-600 text-xs sm:text-lg font-semibold'>
                        {userLabel}
                    </h3>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className='font-bold'>
                <Link href="#" size="lg" className='sm:flex text-lg sm:text-2xl text-black'>
                    <FaRegBell />
                </Link>
                <Link href="#" size="lg" className='sm:flex text-lg sm:text-2xl text-black'>
                    <LuLogOut />
                </Link>

            </NavbarContent>
        </Navbar>
    )
}
