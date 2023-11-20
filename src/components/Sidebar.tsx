import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <nav className='w-[250px] bg-gradient-sidebar'>
            <Link href={'/admin/dashboard'}>
                <div className='p-4 cursor-pointer active:bg-primary text-primary rounded select-none transition'>
                    Dashboard
                </div>
            </Link>
            <Link href={'/admin/theme'}>
                <div className='p-4 cursor-pointer active:bg-primary text-primary rounded select-none transition'>
                    Theme
                </div>
            </Link>
        </nav>
    );
};

export default Sidebar;
