'use client';
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

import { useRouter } from 'next/navigation';

export type AuthValuesType = {
    loading: boolean;
    logout: () => void;
    login: () => void;
    user: string | null;
    setLoading: (value: boolean) => void;
    setUser: (value: string | null) => void;
};

// ** Defaults
const defaultProvider: AuthValuesType = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    logout: () => Promise.resolve(),
    login: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

type Props = {
    children: ReactNode;
};

const AuthContextProvider = ({ children }: Props) => {
    // ** States
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // ** Hooks
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            const storedToken = sessionStorage.getItem('token');
            console.log('storedToken', storedToken);
            if (storedToken) {
                // setLoading(true)
                console.log('hello world');
                setUser(storedToken);
                setLoading(false);
            } else {
                setLoading(false);
                router.replace('/login');
            }
        };

        initAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = () => {
        setUser('hello world');
        //storage.setSessionToken('hello world');
        router.push('/');
    };

    const handleLogout = () => {
        setUser(null);
        //storage.clearAllSession();
        router.push('/login');
    };

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        logout: handleLogout,
        login: handleLogin
    };

    if (!user) {
        return <div>user null</div>;
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, useAuth };
