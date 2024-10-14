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
      <FormLogin />
    </div>

  )
}
