import { ThemeContext } from '@/app/layout';
import React, { useContext } from 'react';

const Navbar = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <nav>
            <pre>{JSON.stringify(themeContext)}</pre>

            <button
                onClick={() =>
                    themeContext?.setTheme(themeContext.theme === 'light' ? 'dark' : 'light')
                }
            >
                change theme
            </button>
        </nav>
    );
};

export default Navbar;
