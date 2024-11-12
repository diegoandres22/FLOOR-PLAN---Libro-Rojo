

import React from 'react';
import { ChecksProps } from '@/types';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';



export const ChecksCard: React.FC<ChecksProps> = ({ aceite, ultVez, inventario }) => {
    return (
        <div className="flex flex-col items-center text-xs font-semibold mt-1 pt-1">
            <div className="flex w-full justify-around">
                <div className="flex rounded-3xl border-2 border-neutral-400 px-2 items-center">
                    <div className="flex flex-col">
                        <p className="h-3">Cambio de aceite:</p>
                        <p className="text-[10px] m-auto text-neutral-600 h-3">
                            Ult. vez: {ultVez}
                        </p>
                    </div>
                    <p className="ml-1 text-base ">
                        {aceite ? (
                            <FaCheck className=" text-green-600" />
                        ) : (
                            <ImCross className="text-sm text-red-600" />
                        )}
                    </p>
                </div>
                <div className="flex rounded-3xl border-2 border-neutral-400 px-2 items-center">
                    <p className="">Carga de inventario:</p>
                    <p className="ml-1 text-base ">
                        {inventario ? (
                            <FaCheck className=" text-green-600" />
                        ) : (
                            <ImCross className="text-sm text-red-600" />
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};
