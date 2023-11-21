import React, { Suspense } from 'react';
import NavbarAdmin from '@/components/NavbarAdmin';
import Sidebar from '@/components/Sidebar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import LoadingAdminLayout from './loading';
import { AuthContextProvider } from '@/context/AuthContext';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <NavbarAdmin />
                <div className='flex overflow-y-hidden min-h-[calc(100vh-75px)] transition'>
                    <Sidebar />
                    <Suspense fallback={<LoadingAdminLayout />}>
                        <main className='w-full overflow-y-scroll p-5'>{children}</main>
                    </Suspense>
                </div>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};

export default AdminLayout;
