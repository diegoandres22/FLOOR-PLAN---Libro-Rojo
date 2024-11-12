

import React from 'react';
import { ManagersProps } from '@/types';

export const Managers: React.FC<ManagersProps> = ({ apertura, cierre }) => {
    return (
        <div className="flex flex-col items-center text-xs font-semibold pb-1">
            <div>Gerentes</div>
            <div className="flex w-full justify-around">
                {/* Apertura */}
                <div className="flex rounded-3xl border-2 border-neutral-400 px-2 items-center">
                    <p className="text-neutral-500">Apertura:</p>
                    <p className="ml-1 text-base font-lapiz">{apertura}</p>
                </div>
                {/* Cierre */}
                {cierre && <div className="flex rounded-3xl border-2 border-neutral-400 px-2 items-center">
                    <p className="text-neutral-500">Cierre:</p>
                    <p className="ml-1 text-base font-lapiz">{cierre}</p>
                </div>}

            </div>
        </div>
    );
};

