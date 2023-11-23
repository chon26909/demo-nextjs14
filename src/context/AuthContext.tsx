'use client';
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

import { useRouter } from 'next/navigation';

type AuthValuesType = {
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthValuesType>({
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        const checkToken = async () => {
            const storedToken = sessionStorage.getItem('token');

            if (!storedToken) {
                router.replace('/login');
            }
        };

        checkToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = (token: string) => {
        sessionStorage.setItem('token', token);
        router.push('/');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        router.push('/login');
    };

    const values = {
        login: handleLogin,
        logout: handleLogout
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, useAuth };
