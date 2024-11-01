import React from 'react'
import { Extraordinary, ProjectionsScreen, Tasks } from '@/components/elements'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'

export const TabsSec = () => {
    const preguntas = [
        { pregunta: "lorem Table allows you to add a custom component at the end of the table, on the example below we are using a button to load more data.", respuesta: true, comentario: "Abrí 5 minutos tarde" },
        { pregunta: "lorem Table allows you to add a  at the end of the table, on the example below we are using a button to load more data.?", respuesta: false, comentario: "Cerré antes de tiempo" },
        { pregunta: "you to add a custom component at the end of the table, on the example below we are using a bu.?", respuesta: true, comentario: "Cerré antes de tiempo" },
        { pregunta: "lorem Table allows you to add a  at twe are using a button to load more data.", respuesta: false, comentario: "Cerré antes de tiempo" },
        { pregunta: "lorem Table allows you to add a custom component at the end of the table, on the example below we are using a button to load more data.", respuesta: false, comentario: "Cerré antes de tiempo" },
        { pregunta: "¿Cerró?", respuesta: true, comentario: "Cerré antes de tiempo" },
        
    ];

    return (
        <div className="flex w-full h-screen flex-col items-center mt-4">
            <Tabs aria-label="Options">
                <Tab key="proyecciones" title="Proyecciones">
                    <Card>
                        <CardBody>
                            <ProjectionsScreen ></ProjectionsScreen>

                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="tareas" title="Tareas">
                    <Card>
                        <CardBody>
                            <Tasks data={preguntas} />
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="novedades" title="Novedades">
                    <Card>
                        <CardBody>
                            <Extraordinary />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}
