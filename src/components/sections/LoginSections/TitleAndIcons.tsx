import React from 'react'
import Image from 'next/image'
import data from "@/../public/images/assets.json"


export const TitleAndIcons = () => {
  return (
    <div className='flex w-full justify-center items-center mt-5'>
      <Image src={data[1].Image} alt={data[1].alt} width={160} height={160}></Image>
      <div className="flex flex-col md:flex-row mt-8 md:items-center">

        <h1 className='text-5xl font-dmg font-black text-amber-500'>Floor Plan </h1>
        <p className='opacity-0 md:opacity-100 absolute md:relative font-black mb-2 m-2'> - </p>

        <h2 className='ml-1 text-2xl font-extrabold text-DMGsecundary '> LIBRO ROJO</h2>
      </div>
    </div>
  )
}
