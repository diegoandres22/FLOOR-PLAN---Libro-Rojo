'use client'

import { Key } from 'react';
import React, { useState } from 'react'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import { Extraordinary, ProjectionsScreen, Tasks } from '@/components/elements'
import data from "@/../../public/Checks.json"

export const TabsSec = () => {

    const [activeTab, setActiveTab] = useState('proyecciones');

    const handleTabChange = (key: Key) => {
        setActiveTab(String(key));
    };

    return (
        <div className="flex w-full h-screen flex-col items-center mt-4">
            <Tabs aria-label="Options" selectedKey={activeTab} onSelectionChange={handleTabChange}>
                <Tab key="proyecciones" title="Proyecciones">
                    {activeTab === 'proyecciones' && (
                        <Card>
                            <CardBody className='w-screen sm:w-auto'>
                                <ProjectionsScreen />
                            </CardBody>
                        </Card>
                    )}
                </Tab>
                <Tab key="tareas" title="Tareas">
                    {activeTab === 'tareas' && (
                        <Card>
                            <CardBody>
                                <Tasks data={data} />
                            </CardBody>
                        </Card>
                    )}
                </Tab>
                <Tab key="novedades" title="Novedades">
                    {activeTab === 'novedades' && (
                        <Card>
                            <CardBody>
                                <Extraordinary />
                            </CardBody>
                        </Card>
                    )}
                </Tab>
            </Tabs>
        </div>
    )
}
