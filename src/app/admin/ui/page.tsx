'use client';
import React, { useRef, useState } from 'react';

import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/button/ToggleSwitch';
import InputText from '@/components/input/InputText';

const UiPage = () => {
    const [checked, setChecked] = useState(false);

    const input = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className='mb-10'>
                <div>input</div>
                <div>
                    <InputText ref={input} />
                    <button
                        onClick={() => {
                            if (input.current) {
                                input.current.focus();
                            }
                        }}
                    >
                        set focus
                    </button>
                </div>
            </div>
            <div className='mb-10'>
                <div>button</div>
                <Button className='mr-5' variant='solid'>
                    click
                </Button>
                <Button variant='bordered'>click</Button>
            </div>
            <div className='mb-10'>
                <div>Switch</div>
                <ToggleSwitch checked={checked} onChange={(value) => setChecked(value)} />
            </div>
        </>
    );
};

export default UiPage;
