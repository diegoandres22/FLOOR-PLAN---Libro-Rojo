
'use client';

import React from 'react';
import { Card, CardBody, Divider, ScrollShadow } from '@nextui-org/react';

interface Notification {
    id: string;
    titulo: string;
    texto: string;
    fecha: string;
}

interface NotificationsSentProps {
    notifications: Notification[];
}

export const NotificationsSents: React.FC<NotificationsSentProps> = ({ notifications }) => {
    return (
            <ScrollShadow className="w-full h-full p-2 scroll-auto " hideScrollBar >

                {notifications.length === 0 ? (
                    <p>No hay notificaciones enviadas</p>
                ) : (
                    notifications.map((notification) => (
                        <Card key={notification.id} className="m-2 ">
                            <CardBody>
                                <div className="flex justify-between items-center">
                                    <p className="text-medium font-semibold text-black/70">{notification.titulo}</p>
                                    <p className="text-[10px] text-neutral-700 ">{notification.fecha}</p>
                                </div>
                                <p className="text-xs text-black/70">{notification.texto}</p>
                            </CardBody>
                        </Card>
                    ))
                )}
            </ScrollShadow>
    );
};

