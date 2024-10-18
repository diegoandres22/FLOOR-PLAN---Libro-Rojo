import React from 'react'
import data from "@/../public/images/assets.json"
import { FormLogin, TextAndFoot, TitleAndIcons } from '../sections'

export const Login = () => {
  return (
    <div
      className="flex flex-col overflow-hidden bg-cover bg-center h-screen w-screen justify-between"
      style={{ backgroundImage: `url(${data[0].Image})` }}
    >
      <TitleAndIcons />
      <div className="flex absolute h-[280px] w-[320px] m-auto inset-0  bg-black/40 rounded-3xl backdrop-blur-sm "> </div>
      <FormLogin />
      <TextAndFoot/>
    </div>

  )
}
