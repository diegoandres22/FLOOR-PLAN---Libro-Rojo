import React from 'react'

export const Form = () => {
    return (
        <form className="space-y-4">
            <input
                type="text"
                placeholder="Usuario"
                className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-white focus:outline-none"
            />
            <input
                type="password"
                placeholder="Clave"
                className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-white focus:outline-none"
            />
            <button className="w-full bg-black text-white py-2 rounded-md">
                Ingresar
            </button>
        </form>
    )
}
