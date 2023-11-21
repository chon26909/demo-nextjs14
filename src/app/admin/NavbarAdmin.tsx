import Link from 'next/link';
import React from 'react';

const NavbarAdmin = () => {
    return (
        <header className='h-[75px] shadow-md'>
            <div className='mx-auto py-5 font-bold flex justify-between items-center h-full'>
                <Link href={'/admin/dashboard'} className='mr-10'>
                    <div className='mx-5 text-primary text-4xl'>Shopy</div>
                </Link>
                <Link href={'/'} className='mr-10'>
                    go to shop
                </Link>
            </div>
        </header>
    );
};

export default NavbarAdmin;
