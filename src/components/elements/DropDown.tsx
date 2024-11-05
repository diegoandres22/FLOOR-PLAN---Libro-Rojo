import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const DropDown = () => {
    const [selected, setSelected] = useState("Tienda");

    const handleSelect = (key: string) => {
        setSelected(key);
    };

    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger className="cursor-pointer m-auto">
                    
                    <p className="flex items-center">{selected} <IoIosArrowDown /> </p>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Ubicación"
                    variant="flat"
                    onAction={(key) => handleSelect(key as string)}
                >
                    <DropdownItem key="Tiendas">Tienda</DropdownItem>
                    <DropdownItem key="Resumen">Resumen</DropdownItem>
                    <DropdownItem key="Notificaciones">Notificaciones</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};