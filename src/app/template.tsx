'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { useRouter } from 'next/router';

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContextProvider>
            <Navbar />
            <main className='h-full container mx-auto'>{children}</main>
        </ThemeContextProvider>
    );
};

export default template;
