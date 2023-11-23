'use client';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'login',
//     description: 'demo'
// };

export default function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <ThemeContextProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ThemeContextProvider>
    );
}
