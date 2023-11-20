'use client';
import React from 'react';
import { ThemeContextProvider } from '@/context/ThemeContext';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContextProvider>
            <main className='h-full container mx-auto'>{children}</main>
        </ThemeContextProvider>
    );
};

export default template;
