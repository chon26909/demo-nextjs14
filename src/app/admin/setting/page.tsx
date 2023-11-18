'use client';

import { useTheme } from '@/context/ThemeContext';
import React from 'react';

const SettingPage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className='h-full'>
            <div>setting</div>
            <div>
                <button onClick={() => setTheme('light')}>light</button>
            </div>
            <div>
                <button onClick={() => setTheme('dark')}>dark</button>
            </div>
        </div>
    );
};

export default SettingPage;
