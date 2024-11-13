import React from 'react'
import { Autocomplete, AutocompleteItem, Input, Textarea } from '@nextui-org/react'
import { TbMoodSad } from 'react-icons/tb';

export const Extraordinary = () => {
    return (
        <div className='flex flex-col justify-center gap-4 max-w-[500px]'>

            <div className="">
                <p >Novedades</p>
                <Textarea
                    variant="bordered"
                    placeholder="Novedades"
                />
            </div>
            <div className="">
                <p >¿Problemas técnicos y/o utensilios faltantes?</p>
                <Textarea
                    variant="bordered"
                    placeholder="Problemas"
                />
            </div>
            <div className="flex flex-wrap gap-2 text-sm justify-between items-end">
                <div className="w-[45%]">
                    <p >Producto No disponible</p>
                    <Input placeholder='Producto' variant="bordered" />
                </div>
                <div className="w-[45%]">
                    <p >Otro</p>
                    <Input placeholder='Producto' variant="bordered" />
                </div>
                <div className="w-[45%]">
                    <p >Producto No disponible</p>
                    <Input placeholder='Producto' variant="bordered" />
                </div>
                <div className="w-[45%]">
                    <p >Otro</p>
                    <Input placeholder='Producto' variant="bordered" />
                </div>
            </div>
            <div className="flex gap-2 justify-between items-center">
                <p >Solicitudes de Servicios Generales sin resolver</p>
                <Input variant="bordered" className="w-16 bottom-0" />
            </div>
            <div className="">

                <div className="flex w-full justify-between items-center mb-1">

                    <p >¿Alguna queja?</p>
                    <Autocomplete placeholder="Selecciona" className='w-48 h-10 ' variant='bordered' startContent={<TbMoodSad className=' text-4xl ' />}>

                        <AutocompleteItem key="1" >Cliente</AutocompleteItem>
                        <AutocompleteItem key="2" >Empleado</AutocompleteItem>

                    </Autocomplete>
                </div>
                <Textarea
                    variant="bordered"
                    placeholder="Quejas"
                />
            </div>
        </div >
    )
}