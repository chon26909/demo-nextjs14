import { ThemeContextProvider } from '@/context/ThemeContext';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const template = ({ children }: Props) => {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default template;
