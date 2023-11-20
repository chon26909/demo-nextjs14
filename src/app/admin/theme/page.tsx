'use client';

import { useTheme } from '@/context/ThemeContext';
import React from 'react';

const SettingPage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className='h-full'>
            <div className='text-3xl font-bold'>Theme Setting</div>
            <div className='flex flex-wrap'>
                <div className=''></div>
            </div>
            <div>
                <button onClick={() => setTheme('light')}>light</button>
            </div>
            <div>
                <button onClick={() => setTheme('dark')}>dark</button>
            </div>
            <div>
                <button onClick={() => setTheme('shopee')}>shopee</button>
            </div>
        </div>
    );
};

export default SettingPage;
