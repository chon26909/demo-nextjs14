'use client';
import ToggleSwitch from '@/components/button/ToggleSwitch';
import React, { useState } from 'react';

const DashboardPage = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className='h-full w-full'>
            <div>checked: {String(checked)}</div>
            <ToggleSwitch checked={checked} onChange={(value) => setChecked(value)} />
        </div>
    );
};

export default DashboardPage;
