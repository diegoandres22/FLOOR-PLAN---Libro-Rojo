'use client'


import React from 'react'
import Image from 'next/image';
import data from "@/../public/images/assets.json";
import items from "@/../../public/Notifications.json"
import { LuLogOut } from "react-icons/lu";
import { DropDown } from '@/components/elements/DropDown';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Notifications } from '@/components/elements';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export const NavbarSec = () => {

    const { role, username, store } = useSelector((state: RootState) => state.login);

    return (
        <Navbar shouldHideOnScroll className='bg-white rounded-xl shadow-lg mt-2'>
            <NavbarContent>
                <Image src={data[1].Image} alt={data[1].alt} width={50} height={50} />
                <h2 className='text-xs sm:text-lg font-black font-dmg'>Floor Plan</h2>
            </NavbarContent>

            <NavbarContent className="text-xs lg:text-lg sm:flex gap-4 ml-8" justify="center">
                <NavbarItem className='flex flex-col sm:flex-row'>
                    <h3 className='text-neutral-600 text-xs sm:text-lg font-bold'>
                        {role === "admin" ? username : store}
                    </h3>
                    <h4 className='hidden font-bold mx-1 sm:flex'>-</h4>
                    <h3 className='text-neutral-600 text-xs sm:text-lg font-semibold text-center'>
                        {role === "admin" ? <DropDown /> : username}

                    </h3>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className='font-bold'>

                {role === "admin" ? "" : <Notifications items={items} />}


                <Link href="/" size="lg" className='sm:flex text-xl sm:text-2xl text-red-600' >
                    <LuLogOut />
                </Link>

            </NavbarContent>
        </Navbar>
    )
}


