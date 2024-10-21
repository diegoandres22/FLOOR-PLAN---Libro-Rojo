import React from 'react'
import { Extraordinary, ProjectionsScreen, Tasks } from '@/components/elements'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'

export const NavbarTabsSec = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center mt-4">
            <Tabs aria-label="Options">
                <Tab key="proyecciones" title="Proyecciones">
                    <Card>
                        <CardBody>
                            <ProjectionsScreen></ProjectionsScreen>

                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="tareas" title="Tareas">
                    <Card>
                        <CardBody>
                            <Tasks/>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="novedades" title="Novedades">
                    <Card>
                        <CardBody>
                            <Extraordinary/>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}
