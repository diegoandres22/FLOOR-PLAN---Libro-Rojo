

import React from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'

export const NewNotification = () => {
    return (
        <div>
            <form className="flex flex-col gap-4 h-[300px] select-none">
                <Input isRequired label="Título" placeholder="Titulo de la notificación" />
                <Textarea isRequired
                    label="Descripción"
                    placeholder="Cuerpo del mensaje"
                />
                <div className="flex w-72 mx-auto">
                    <Button fullWidth color="warning" className='font-semibold'>
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    )
}
