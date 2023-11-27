'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type Menu = {
    title: string;
    href: string;
    submenu?: Menu[];
};

const menu: Menu[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard'
    },
    {
        title: 'theme',
        href: '/admin/theme'
    },
    {
        title: 'UI Example',
        href: '/admin/ui'
    }
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <nav className='w-[250px] bg-gradient-sidebar'>
            {menu.map(({ title, href }) => {
                return (
                    <Link href={href} key={href}>
                        <div
                            className={[
                                'p-4 cursor-pointer active:bg-primary text-primary rounded select-none transition',
                                href === pathname && 'bg-primary text-white'
                            ].join(' ')}
                        >
                            {title}
                        </div>
                    </Link>
                );
            })}
        </nav>
    );
};

export default Sidebar;
