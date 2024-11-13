'use client'
import React from 'react'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { NewNotification, NotificationsSents } from '../sections'

export const AlertsScreen = () => {
    return (
        <Tabs aria-label="Options" className='flex justify-center mt-4'>
            <Tab key="sends" title="Notificaciones enviadas">
                <Card>
                    <CardBody>
                        <NotificationsSents />
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="new" title="Enviar Notificacion">
                <Card>
                    <CardBody>
                        <NewNotification />
                    </CardBody>
                </Card>
            </Tab>
        </Tabs>
    )
}
