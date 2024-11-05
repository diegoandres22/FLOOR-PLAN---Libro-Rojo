'use client'
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>

            <NextUIProvider>
                {children}
            </NextUIProvider>
        </Provider>
    )
};

export default Providers;
