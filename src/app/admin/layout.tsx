import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContextProvider>
            <Navbar />
            <div className='flex overflow-x-hidden min-h-[94vh] transition'>
                <Sidebar />
                <main className='w-full overflow-y-scroll'>{children}</main>
            </div>
        </ThemeContextProvider>
    );
};

export default AdminLayout;
