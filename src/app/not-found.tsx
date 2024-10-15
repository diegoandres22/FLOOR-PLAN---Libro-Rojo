import React from 'react'
import Image from 'next/image'
import data from "@/../public/images/assets.json"

const page = () => {
  return (
    <div className="">
      <div
        className="flex absolute overflow-hidden bg-cover bg-center h-screen w-screen items-center justify-center blur-sm "
        style={{ backgroundImage: `url(${data[0].Image})` }}    >
      </div>
      <div className="absolute z-10 w-screen h-screen flex flex-col lg:flex-row overflow-hidden bg-cover bg-center items-center justify-center">
        <Image src={data[1].Image} alt={data[1].alt} width={160} height={160}></Image>
        <div className="flex flex-col ">
          <div className="flex justify-center lg:justify-normal items-end gap-4">

            <p className=' text-4xl font-black font-dmg'>404</p>
            <p className='text-lg'>Página no encontrada</p>
          </div>
          <p className='text-center lg:text-left'>Intentaste buscar algo, pero no encontramos la página que buscabas. <br /> No te preocupes, sólo regresa al inicio.</p>
        </div>
      </div>
    </div>

  )
}
export default page;