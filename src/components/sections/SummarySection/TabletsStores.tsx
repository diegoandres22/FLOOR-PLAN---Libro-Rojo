'use client'

import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { ProductoData, TabletsStoresProps } from '@/types';


export const TabletsStores: React.FC<TabletsStoresProps> = ({ dmg, makai }) => {

    const renderTable = (title: string, data: ProductoData[]) => (
        <div className="max-w-96 flex flex-col m-auto">
            <p className='font-semibold ml-4'>{title}</p>
            <Table aria-label={`Table for ${title}`} isStriped>
                <TableHeader >
                    <TableColumn key="producto" className='text-base' >Producto</TableColumn>
                    <TableColumn key="proyección" >
                        <div className="flex justify-center text-base"> Proyección </div>
                    </TableColumn>
                    <TableColumn key="produccion" >
                        <div className="flex justify-center text-base"> Producción </div>
                    </TableColumn>
                </TableHeader>
                <TableBody items={data}>
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.producto}</TableCell>
                            <TableCell>
                                <div className="flex justify-center">{item.projection}</div>
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-center">{item.production}</div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );

    return (
        <div className="mt-4 flex justify-between flex-wrap gap-y-4 pb-4">
            {renderTable('Don Manuel Grill', dmg)}
            {renderTable('Makai', makai)}
        </div>
    );

}
