import React from 'react'
import { Autocomplete, AutocompleteItem, Input, Textarea } from '@nextui-org/react'
import { TbMoodSad } from 'react-icons/tb';

export const Extraordinary = () => {
    return (
        <div >


            <p className='text-lg'>Novedades</p>
            <Textarea
                variant="bordered"
                placeholder="Novedades"
                className="sm:w-96"
            />
            <br />
            <p >¿Problemas técnicos y/o utensilios faltantes?</p>
            <Textarea
                variant="bordered"
                placeholder="Problemas"
                className="sm:w-96"
            />
            <br />

            <p >¿Algún producto No disponible?</p>
            <Textarea
                variant="bordered"
                placeholder="No disponible"
                className="sm:w-96"
            />
            <br />
            <div className="flex gap-2 justify-between">
                <p className='sm:hidden max-w-52'>Solicitudes de S/G sin resolver</p>
                <p className='hidden sm:flex my-auto'>Solicitudes de Servicios Generales sin resolver</p>
                <Input variant="bordered" className="w-16 bottom-0" />
            </div>
            <div className="flex w-full justify-between items-center mb-1">

                <p className='text-lg '>¿Alguna queja?</p>
                <Autocomplete placeholder="Selecciona" className='w-48 h-10 ' variant='bordered' startContent={<TbMoodSad className=' text-4xl ' />}>

                    <AutocompleteItem key="1" >Cliente</AutocompleteItem>
                    <AutocompleteItem key="2" >Empleado</AutocompleteItem>

                </Autocomplete>
            </div>
            <Textarea
                variant="bordered"
                placeholder="Quejas"
                className="sm:w-96"
            />
        </div >
    )
}