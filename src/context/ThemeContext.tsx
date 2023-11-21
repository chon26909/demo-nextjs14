'use client';
import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

type Theme = 'light' | 'dark' | 'shopee' | 'none';

export interface ThemeContextType {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('none');

    useEffect(() => {
        const themeStore = localStorage.getItem('theme');

        if (themeStore) {
            setTheme(themeStore as Theme);
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme != 'none') {
            const body = document.getElementsByTagName('body')[0];
            body.setAttribute('theme-data', theme as Theme);
            localStorage.setItem('theme', theme as Theme);
        }
    }, [theme]);

    if (theme === 'none') {
        return <></>;
    }

    return (
        <ThemeContext.Provider value={{ theme: theme as Theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }

    return context;
};

export { ThemeContext, ThemeContextProvider, useTheme };
