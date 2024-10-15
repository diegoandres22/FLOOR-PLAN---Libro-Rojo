import { Form } from '@/components/elements'
import React from 'react'

export const FormLogin = () => {
    return (
        <div className="relative flex flex-col text-white rounded-3xl p-8 w-80  mx-auto shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
        
        <Form></Form>
    
        <p className="text-center mt-4 font-bold text-sm">
            Bienvenido a tu herramienta donde centralizas la información de proyecciones diarias y progreso de todas tus unidades de negocio.
        </p>
    
      
    </div>
    
         
    
    )
}
