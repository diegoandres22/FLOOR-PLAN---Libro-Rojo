'use client'; 

import React, { useEffect } from 'react';
import Image from 'next/image';
import data from "@/../public/images/assets.json";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'; 

export const NotFountScreen = () => {
  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    if (pathname !== '/404') {
      router.push('/404'); 
    }
  }, [pathname]); 

  return (
    <div className="">
      <div
        className="flex absolute overflow-hidden bg-cover bg-center h-screen w-screen items-center justify-center blur-sm"
        style={{ backgroundImage: `url(${data[0].Image})` }}
      ></div>
      <div className="w-screen h-screen bg-black/50 absolute top-0 left-0"></div>
      <div className="absolute z-10 w-screen h-screen flex flex-col lg:flex-row overflow-hidden bg-cover bg-center items-center justify-center text-white">
        <Image src={data[1].Image} alt={data[1].alt} width={160} height={160} />
        <div className="flex flex-col ">
          <div className="flex justify-center lg:justify-normal items-end gap-4">
            <p className='text-4xl font-black font-dmg'>404</p>
            <p className='text-lg'>Página no encontrada</p>
          </div>
          <p className='text-center lg:text-left'>
            Esa página que estabas buscando, no la encontramos...
          </p>
        </div>
      </div>
    </div>
  );
};
