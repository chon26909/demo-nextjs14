'use client';
import Navbar from '@/components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import Loading from './loading';

export default function Layout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />
            {/* {children} */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </QueryClientProvider>
    );
}
