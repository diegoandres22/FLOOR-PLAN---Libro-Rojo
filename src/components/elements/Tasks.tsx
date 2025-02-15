

import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox } from '@nextui-org/react';
import { columnClassNames } from '@/functionsAndClassName';
import { ModalComent } from './ModalComent';

type Question = {
    pregunta: string;
    respuesta: boolean;
    comentario: string;
};

type TasksProps = {
    data: Question[];
};

export const Tasks: React.FC<TasksProps> = ({ data }) => {


    return (
        <Table aria-label="Tabla de preguntas y respuestas" isStriped removeWrapper>
            <TableHeader >
                <TableColumn className={columnClassNames}>Detalle</TableColumn>
                <TableColumn className={columnClassNames}>Comentario</TableColumn>
                <TableColumn className={columnClassNames}>Cumplido ?</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.pregunta}</TableCell>
                        <TableCell >
                            <div className="flex text-xl opacity-60 justify-center ">
                                <ModalComent></ModalComent>

                            </div>

                        </TableCell>

                        <TableCell className='text-sm'>
                            <div className="flex justify-center ">

                                <Checkbox size="lg" color="warning" defaultSelected={item.respuesta} />
                            </div>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
