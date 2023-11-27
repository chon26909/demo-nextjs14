import Link from 'next/link';
import React from 'react';
import Logo from '../../components/Logo';

const Navbar = () => {
    return (
        <header className='bg-primary h-[80px]'>
            <div className='container mx-auto py-5 h-full'>
                <div className='flex justify-between items-center h-full'>
                    <div>
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div>
                        <Link href={'/admin/dashboard'}>Admin</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
