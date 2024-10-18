import React from 'react'
import { ProjectionsScreen } from "@/components/screen/ProjectionsScreen";
import { NavBar } from '@/components/sections';

export default function page() {
    return (
        <div className='bg-fondo w-[95vw] mx-auto rounded-xl pt-4'>
            <NavBar></NavBar>

            <ProjectionsScreen></ProjectionsScreen>
        </div>
    )
}
