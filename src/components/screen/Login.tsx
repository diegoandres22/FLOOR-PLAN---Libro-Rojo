import React from 'react'
import data from "@/../public/images/assets.json"
import { FormLogin, TitleAndIcons } from '../sections'

export const Login = () => {
  return (
    <div
      className="flex flex-col overflow-hidden bg-cover bg-center h-screen w-screen justify-between"
      style={{ backgroundImage: `url(${data[0].Image})` }}
    >
      <TitleAndIcons />
      <div className="flex absolute h-[280px] w-[320px] m-auto inset-0  bg-black/40 rounded-3xl backdrop-blur-sm "> </div>
      <FormLogin />
      <p className=" absolute text-center text-black font-bold  text-lg max-w-[400px] inset-0 m-auto top-[78vh] blur-sm">
        Bienvenido a tu herramienta donde centralizas la información de proyecciones diarias y progreso de todas tus unidades de negocio.
      </p>
      <p className=" absolute text-center text-black font-bold blur-sm text-lg max-w-[400px] inset-0 m-auto top-[75vh]  ">
        Bienvenido a tu herramienta donde centralizas la información de proyecciones diarias y progreso de todas tus unidades de negocio.
      </p>
      <p className=" absolute z-10 text-center font-bold text-lg max-w-[400px] inset-0 m-auto top-[76vh]  ">
        Bienvenido a tu herramienta donde centralizas la información de proyecciones diarias y progreso de todas tus unidades de negocio.
      </p>
      <p className=" absolute text-center text-black font-bold blur-sm text-lg max-w-[400px] inset-0 m-auto top-[77vh]  ">
        Bienvenido a tu herramienta donde centralizas la información de proyecciones diarias y progreso de todas tus unidades de negocio.
      </p>
      <p className="text-center text-xs mb-4">
        Para más información comunícate con <a href="#" className="text-blue-400 ">Tecnología</a> del grupo DMG.
      </p>
    </div>

  )
}
