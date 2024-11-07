
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation"; 

export const DropDown = () => {
    const [selected, setSelected] = useState("Tienda");
    const router = useRouter(); 

    const handleSelect = (key: string) => {
        setSelected(key);
        if (key === "Tienda") {
            router.push("/admin/tienda");
        } else if (key === "Resumen") {
            router.push("/admin/resumen");
        } else if (key === "Notificaciones") {
            router.push("/admin/alerts");
        }
    };

    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger className="cursor-pointer m-auto">
                    <p className="flex items-center">
                        {selected} <IoIosArrowDown />
                    </p>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Ubicación"
                    variant="flat"
                    onAction={(key) => handleSelect(key as string)}
                >
                    <DropdownItem key="Tienda">Tienda</DropdownItem>
                    <DropdownItem key="Resumen">Resumen</DropdownItem>
                    <DropdownItem key="Notificaciones">Notificaciones</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
