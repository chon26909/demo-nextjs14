'use client';
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const { data: session } = useSession();

    console.log('session', session);

    if (!session) {
        <div>session null</div>;
    }

    return (
        <SessionProvider>
            {session == null && (
                <div>
                    <Link href={'/api/auth/signin'}>Signin</Link>
                </div>
            )}
            {session && !session.user && (
                <div>
                    <Link href={'/api/auth/signin'}>Signin</Link>
                </div>
            )}
            {session && session.user && (
                <div>
                    <div>{session.user.name}</div>
                    <div>
                        <Link href={'/api/auth/signout'}>Signout</Link>
                    </div>
                </div>
            )}
        </SessionProvider>
    );
};

export default Header;
