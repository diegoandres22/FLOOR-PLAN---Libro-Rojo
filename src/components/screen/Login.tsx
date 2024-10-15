import React from 'react'
import data from "@/../public/images/assets.json"
import { FormLogin, TitleAndIcons } from '../sections'

export const Login = () => {
  return (
    <div
      className="flex flex-col overflow-hidden bg-cover bg-center h-screen w-screen "
      style={{ backgroundImage: `url(${data[0].Image})` }}
    >
      <TitleAndIcons />
      <div className="flex absolute h-[362px] w-[320px] m-auto inset-0  bg-black/40 rounded-3xl backdrop-blur-sm "> </div>
      <FormLogin />
      <p className="text-center text-xs mt-36">
        Para más información comunícate con <a href="#" className="text-blue-400 ">Tecnología</a> del grupo DMG.
      </p>
    </div>

  )
}
