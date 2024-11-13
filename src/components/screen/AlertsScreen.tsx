'use client'
import React from 'react'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { NewNotification, NotificationsSents } from '../sections'

export const AlertsScreen = () => {
    const data = [
        { id: '1', titulo: 'Nuevo producto disponible', texto: 'Ya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse eius aspernatur, repudiandae eos molestias illum blanditiis officiis qui amet magnam quasi iusto, labore corrupti adipisci ratione optio. Nihil, cumque? disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '2', titulo: 'Nuevo producto disponible', texto: 'Ya tenemos disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '3', titulo: 'Nuevo producto disponible', texto: 'Ya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse eius aspernatur, repudiandae eos molestias illum blandit labore corrupti adipisci ratione optio. Nihil, cumque? disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '4', titulo: 'Promoción de temporada', texto: 'Aprovecha lorem ofertas de otoño', fecha: '2024-11-10' },
        { id: '5', titulo: 'Nuevo producto disponible', texto: 'Ya tenemos disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '6', titulo: 'Nuevo producto disponible', texto: 'Ya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse eius aspernatur, repudiandae eos molestias illum blanditiis officiis qui amet magnam quasi iusto, labore corrupti adipisci ratione optio. Nihil, cumque? disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '7', titulo: 'Promoción de temporada', texto: 'Aprovecha lorem ofertas de otoño', fecha: '2024-11-10' },
        { id: '8', titulo: 'Nuevo producto disponible', texto: 'Ya tenemos disponible el nuevo sabor de helado', fecha: '2024-11-12' },
        { id: '9', titulo: 'Nuevo producto disponible', texto: 'Ya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse eius aspernatur, repudiandae eos molestias illum blanditiis officiis qui amet magnam quasi iusto, labore corrupti adipisci ratione optio. Nihil, cumque? disponible el nuevo sabor de helado', fecha: '2024-11-12' },
    ];

    return (
        <Tabs aria-label="Options" className='flex justify-center items-center mt-4 '>
            <Tab key="sends" title="Notificaciones enviadas">
                <Card className='max-w-[1000px] m-auto'>
                    <CardBody className='h-[76vh] bg-neutral-200'>
                        <h3 className="text-lg font-semibold ml-6">Todas las notificaciones</h3>

                        <NotificationsSents notifications={data} />
                    </CardBody>
                </Card>
            </Tab>
            <Tab key="new" title="Enviar Notificacion">
                <Card className='max-w-[500px] m-auto'>
                <CardBody className='h-[76vh] bg-neutral-200'>
                <h3 className="text-lg font-semibold ml-2">Enviar notificación</h3>

                        <NewNotification />
                    </CardBody>
                </Card>
            </Tab>
        </Tabs>
    )
}
