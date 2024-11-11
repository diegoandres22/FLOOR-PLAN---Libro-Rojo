'use client'

import React, { useState } from 'react';
import { Link } from "@nextui-org/react";
import { IoMdRefresh } from 'react-icons/io';

export const Refresh: React.FC = () => {
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = () => {
        setIsRotating(true);

        setTimeout(() => {
            setIsRotating(false);
        }, 2000);

    };

    return (
        <div className='w-full '>
            <Link href="#" color="foreground" className=' text-2xl ml-[93%]'>
                <IoMdRefresh
                    onClick={handleClick}
                    className={` ${isRotating ? 'animate-spin ' : ''}`}
                />
            </Link>
        </div>
    );
};

