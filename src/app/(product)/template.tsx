'use client';
import React from 'react';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { ModalContextProvider } from '@/context/ModalContext';
import Dialog from '@/components/dialog/Dialog';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContextProvider>
            <ModalContextProvider>
                <main className='h-full container mx-auto'>{children}</main>
            </ModalContextProvider>

            <Dialog />
        </ThemeContextProvider>
    );
};

export default template;
