import React from 'react';

// Definimos los tipos de las props
interface ManagersProps {
    apertura: string;
    cierre: string;
}

export const Managers: React.FC<ManagersProps> = ({ apertura, cierre }) => {
    return (
        <div className="flex flex-col items-center text-xs font-semibold">
            <div>Gerentes</div>
            <div className="flex w-full justify-around">
                {/* Apertura */}
                <div className="flex rounded-3xl border-2 border-neutral-400 px-2">
                    <p className="text-neutral-500">Apertura:</p>
                    <p className="ml-1">{apertura}</p>
                </div>
                {/* Cierre */}
                {cierre && <div className="flex rounded-3xl border-2 border-neutral-400 px-2">
                    <p className="text-neutral-500">Cierre:</p>
                    <p className="ml-1">{cierre}</p>
                </div>}

            </div>
        </div>
    );
};

