'use client'

import React, { useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';

export const Refresh: React.FC = () => {
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = () => {
        setIsRotating(true);

        setTimeout(() => {
            setIsRotating(false);
        }, 3000);

    };

    return (
        <div className='w-full text-2xl'>
            <IoMdRefresh
                onClick={handleClick}
                className={`cursor-pointer ml-[93%] ${isRotating ? 'animate-spin ' : ''}`}
            />
        </div>
    );
};

