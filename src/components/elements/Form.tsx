import {Button} from "@nextui-org/react";

import React from 'react'


export const Form = () => {
    return (
        <form className="space-y-6">
            <div className="relative">
                <input
                    type="text"
                    id="usuario"
                    placeholder=" "
                    className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-transparent focus:outline-none peer"
                    required
                />
                <label
                    htmlFor="usuario"
                    className="absolute left-2 top-2 text-neutral-400 font-medium 
             transition-all duration-200 ease-in-out transform 
            peer-focus:-translate-y-5 peer-focus:left-1 peer-focus:text-md 
            peer-focus:text-opacity-100  peer-focus:text-white  peer-valid:-translate-y-6 peer-valid:left-1 peer-valid:text-sm
            peer-valid:text-orange-500 peer-valid:font-semibold"
                >
                    Usuario
                </label>
            </div>

            <div className="relative">
                <input
                    type="password"
                    id="clave"
                    placeholder=" "
                    className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-transparent focus:outline-none peer"
                    required
                />
                <label
                    htmlFor="clave"
                    className="absolute left-2 top-2 text-neutral-400 font-medium 
            transition-all duration-200 ease-in-out transform 
            peer-focus:-translate-y-5 peer-focus:left-1 peer-focus:text-sm 
            peer-focus:text-opacity-100 peer-focus:text-white peer-valid:-translate-y-6 peer-valid:left-1 peer-valid:text-sm 
            peer-valid:text-orange-500 peer-valid:font-semibold"
                >
                    Clave
                </label>
            </div>

            
            <Button color="default" className="w-full text-white bg-black ">
                Ingresar
            </Button>

        </form>



    )
}
7