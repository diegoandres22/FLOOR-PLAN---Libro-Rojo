

import React from 'react'
import Image from 'next/image';
import { SquaresProps } from '@/types'
import { CgSmileSad } from 'react-icons/cg'
import { PiToolboxBold } from 'react-icons/pi'
import data from "@/../public/images/assets.json";
import { LiaHamburgerSolid } from 'react-icons/lia'
import { IoStorefrontOutline } from 'react-icons/io5'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'



export const Squares: React.FC<SquaresProps> = ({ openStores, missings, sadness, maintenance }) => {
    return (
        <div className='flex p-4 pt-0 justify-evenly gap-4 flex-wrap'>

            <Popover placement="bottom" showArrow backdrop="opaque">
                <PopoverTrigger>
                    <button>
                        <div className="flex bg-white w-auto rounded-lg px-2 shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
                            <div className="text-6xl opacity-15">
                                <IoStorefrontOutline />
                            </div>
                            <div className=" font-semibold text-neutral-600 p-2">
                                <p >Tiendas</p>
                                <div className="flex justify-evenly ">
                                    <p className='text-green-500'>{openStores.open}</p>
                                    <p className='text-red-500'>{openStores.close}</p>
                                    <p >{openStores.soon}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Estado de las tiendas</div>
                        <div className="flex items-center gap-1">
                            <span className='w-3 h-3 bg-green-500 rounded-full'> </span> <p>Tiendas abiertas</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className='w-3 h-3 bg-red-500 rounded-full'> </span> <p>Tiendas cerradas</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className='w-3 h-3 bg-gray-500 rounded-full'> </span> <p>Próximamente</p>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <Popover placement="bottom" showArrow backdrop="opaque">
                <PopoverTrigger>
                    <button>
                        <div className="flex bg-white w-auto rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
                            <div className="text-7xl opacity-15 h-10 flex justify-center">
                                <LiaHamburgerSolid />
                            </div>
                            <div className=" font-semibold text-neutral-600 p-2 ">
                                <p className='text-center'>Faltantes</p>
                                <div className="flex justify-evenly text-sm items-center gap-2">
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[1].Image}
                                            alt={data[1].alt}
                                            width={20}
                                            height={0}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{missings.dmg}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[2].Image}
                                            alt={data[2].alt}
                                            height={40}
                                            width={40}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{missings.makai}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Productos faltantes</div>
                    </div>
                </PopoverContent>
            </Popover>

            <Popover placement="bottom" showArrow backdrop="opaque">
                <PopoverTrigger>
                    <button>

                        <div className="flex bg-white w-auto rounded-lg pl-2 shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
                            <div className="text-6xl opacity-15 flex items-center">
                                <CgSmileSad />
                            </div>
                            <div className=" font-semibold text-neutral-600 py-2 pr-2">
                                <p className=' text-center'>Quejas</p>
                                <div className="flex justify-evenly text-sm items-center gap-2">
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[1].Image}
                                            alt={data[1].alt}
                                            width={20}
                                            height={0}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{sadness.dmg}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[2].Image}
                                            alt={data[2].alt}
                                            height={40}
                                            width={40}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{sadness.makai}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Total de quejas</div>
                        <div className="text-tiny">Clientes y Empleados</div>
                    </div>
                </PopoverContent>
            </Popover>



            <Popover placement="bottom" showArrow backdrop="opaque">
                <PopoverTrigger>
                    <button>
                        <div className="flex bg-white w-auto rounded-lg pl-2 shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
                            <div className="text-6xl opacity-15">
                                <PiToolboxBold />
                            </div>
                            <div className=" font-semibold text-neutral-600 p-2">
                                <p className='text-center'>Solicitudes</p>
                                <div className="flex justify-evenly text-sm items-center gap-2">
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[1].Image}
                                            alt={data[1].alt}
                                            width={20}
                                            height={0}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{maintenance.dmg} </p>
                                    </div>
                                    <div className="flex gap-1">
                                        <Image
                                            src={data[2].Image}
                                            alt={data[2].alt}
                                            height={40}
                                            width={40}
                                            className='rounded-lg '
                                        /> <p className='pt-1'>{maintenance.makai} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Solicitudes de servicios generales</div>
                        <div className="text-tiny">Tanto &quot;Pendiente&quot; como &quot;En proceso&quot;</div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
