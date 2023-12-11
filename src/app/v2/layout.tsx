//import { ThemeContextProvider } from '@/context/ThemeContext';
import { ThemeContextProvider } from '@/context/ThemeContext';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Layout;
