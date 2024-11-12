
import React from 'react';
import { ProgressBarProps } from '@/types';


export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color }) => {

    const progress = Math.max(0, Math.min(percentage, 100));

    const getColorByEstado = (color: number) => {
        switch (color) {
            case 1:
                return '#16a34a'; // Verde
            case 2:
                return '#facc15'; // Amarillo
            case 3:
                return '#ef4444'; // Rojo
            default:
                return '#a3a3a3'; // Gris por defecto
        }
    };

    return (
        <div className="w-full h-6 rounded-full bg-gray-300 shadow-inner mt-4">
            <div
                className={`h-full rounded-full font-semibold flex items-center justify-center transition-all duration-300`}
                style={{
                    width: `${progress}%`,
                    backgroundColor: getColorByEstado(color),
                }}
            >
                {progress > 15 ? progress + "%" : ""}
            </div>
        </div>
    );
};

