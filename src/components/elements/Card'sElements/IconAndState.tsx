import React from 'react';
import Image from 'next/image';
import data from "@/../public/images/assets.json";
import { Tooltip } from '@nextui-org/react';
import { IconAndStateProps } from '@/types';



export const IconAndState: React.FC<IconAndStateProps> = ({ tienda, estado, ubi, name }) => {

    const index = tienda === 'dmg' ? 1 : 2;
    const altText = data[index]?.alt;
    const color = estado === 'abierto' ? 'bg-green-500' : estado === 'cerrado' ? 'bg-red-500' : 'bg-gray-500';

    return (
        <div className='flex w-full'>
            <div className="w-1/4 flex justify-center max-h-10 ">

                {tienda === "dmg" || tienda === "macuto" ? <Image
                    src={data[1].Image}
                    alt={data[1].alt}
                    width={45}
                    height={50}
                />
                    : <Image
                        src={data[2].Image}
                        alt={data[2].alt}
                        width={80}
                        height={0}
                        className='rounded-lg '
                    />
                }
            </div>

            <div className="flex flex-col w-3/4">
                <div className="flex justify-end items-center gap-1">
                    <p className='lg:hidden text-xs font-semibold'>{estado}</p>
                    <Tooltip content={estado} showArrow={true} color='foreground'>
                        <span className={`w-4 h-4 ${color} rounded-full`}></span>
                    </Tooltip>
                </div>
                <div className='flex gap-1'>
                    <p className='font-semibold'>
                        {name}
                    </p>
                    <p className=' font-semibold text-neutral-500'>
                        - {ubi}
                    </p>
                </div>
            </div>
        </div>
    );
};
