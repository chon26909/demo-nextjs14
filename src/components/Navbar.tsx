import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='bg-primary '>
            <div className='container mx-auto py-5 font-bold text-white'>
                <Link href={'/'} className='mr-10'>
                    Home
                </Link>
                <Link href={'/admin/dashboard'} className='mr-10'>
                    Dashboard
                </Link>
                <Link href={'/setting'} className='mr-10'>
                    Setting
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
