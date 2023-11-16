'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app'
// };

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    return (
        <html lang='en'>
            <body
                theme-data={theme}
                className={[inter.className, 'flex min-h-screen flex-col bg-primary'].join(' ')}
            >
                <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
                    <Navbar />
                    <main className=''>{children}</main>
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
