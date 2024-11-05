'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loguear } from '@/redux/slices/loginSlice';
import { useDispatch } from 'react-redux';
import items from "@/../../public/Users.json"


export const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (username === "gerente" && password === "123") {

            dispatch(loguear(items[0]));
            router.push("/tienda");
        } else if (username === "admin" && password === "123") {

            dispatch(loguear(items[1]));
            router.push("/admin");
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleLogin}>
            <div className="relative">
                <input
                    type="text"
                    id="usuario"
                    placeholder=" "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 rounded-md bg-white bg-opacity-20 placeholder-transparent focus:outline-none peer"
                    required
                />
                <label
                    htmlFor="usuario"
                    className="absolute left-2 top-2 text-neutral-400 font-medium 
                        transition-all duration-200 ease-in-out transform 
                        peer-focus:-translate-y-5 peer-focus:left-1 peer-focus:text-md 
                        peer-focus:text-opacity-100 peer-focus:text-white peer-valid:-translate-y-6 peer-valid:left-1 peer-valid:text-sm
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

            <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
                Ingresar
            </button>
        </form>
    );
};
