

import React from 'react'
import { TableProjection } from './index';
import projectionData from "@/../../public/ProjectionData.json";

export const ProjectionsScreen = () => {

  return (
    <div className=' flex flex-col gap-6'>
      {projectionData.tables.map((table, index) => (
        <TableProjection key={index} title={table.title} rows={table.items} />
      ))}
    </div>
  )
}
