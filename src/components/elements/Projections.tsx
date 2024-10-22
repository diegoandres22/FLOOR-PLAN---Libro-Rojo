import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import React from 'react'

export const ProjectionsScreen = () => {
  return (
    <Table aria-label="Example static collection table" isStriped removeWrapper>
      <TableHeader>
        <TableColumn>Productos</TableColumn>
        <TableColumn>Stock</TableColumn>
        <TableColumn>Proyección</TableColumn>
        <TableColumn>Producción</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Laminas wrap</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Laminas pizza Mediana</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Laminas Pizza Pequeña</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Laminas Pizza Grande</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
