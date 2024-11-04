

import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import { FaRegBell } from "react-icons/fa";
import { NotificationsProps } from '@/types';


export const Notifications: React.FC<NotificationsProps> = ({ items }) => {

    return (
        <Dropdown>
            <DropdownTrigger>
                <Link isBlock href="#" color="foreground" className='sm:flex text-lg sm:text-2xl text-black'>
                    <FaRegBell />
                </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Notifications" className="absolute top-0 z-50 bg-white shadow-lg rounded-lg" >

                {items.map(item => (
                    <DropdownItem key={item.key}>
                        <div className="flex items-start space-x-2 p-2">
                            {!item.isRead && (
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1" />
                            )}
                            <div className="flex-1">
                                <p className="font-semibold text-sm">{item.label}</p>
                                <p className="text-xs text-gray-600">{item.description}</p>
                                <p className="text-xs text-gray-400">{item.fecha}</p>
                            </div>
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
