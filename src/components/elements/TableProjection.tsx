import React from 'react';
import { VariosProps } from '@/types';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Checkbox } from '@nextui-org/react';
import columns from "@/../../public/Columns.json";
import { columnClassNames, produccion, validate0 } from '@/functionsAndClassName';

export const TableProjection: React.FC<VariosProps> = ({ title, rows }) => {




    return (
        <div className='flex flex-col items-center font-bold'>
            <h5>{title}</h5>
            <Table aria-label={`Table of ${title}`}>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn className={columnClassNames} key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {/* Producto  */}
                            <TableCell className='w-52 font-semibold' >{item.Producto}</TableCell>

                            {/* Proyección  */}
                            <TableCell >
                                <div className="flex w-full ">
                                    <Input
                                        variant="bordered"
                                        defaultValue={validate0(item.Proyección)}
                                        className={`max-w-16 m-auto ${item.Proyección > 0 ? 'bg-warning rounded-xl ' : ''
                                            }`} />
                                </div>
                            </TableCell>
                            {/* Stock  */}
                            <TableCell >
                                <div className="flex w-full ">
                                    <Input
                                        variant="bordered"
                                        defaultValue={validate0(item.Stock)}
                                        className={`max-w-16 m-auto ${item.Stock > 0 ? 'bg-warning rounded-xl ' : ''
                                            }`} />
                                </div>
                            </TableCell>

                            {/* Producción  */}
                            <TableCell>
                                <div className="flex w-full ">
                                    <Input
                                        variant="bordered"
                                        defaultValue={item.Producción > 0 ? item.Producción.toString() : undefined}
                                        placeholder={produccion(item.Producción, item.Proyección, item.Stock)}
                                        className={`max-w-16 m-auto ${item.Producción > 0 ? 'bg-warning rounded-xl' : 'text-gray-400'}`}
                                    />
                                </div>
                            </TableCell>


                            {/* Listo  */}
                            <TableCell >
                                <div className="flex w-full ">
                                    <Checkbox className='m-auto' color="warning" size="lg" defaultSelected={item.listo} >  </Checkbox>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

// className="flex justify-center"   {item.hecho}
