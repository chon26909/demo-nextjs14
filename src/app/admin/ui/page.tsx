'use client';
import React, { useRef, useState } from 'react';

import Button from '@/components/button/Button';
import ToggleSwitch from '@/components/button/ToggleSwitch';
import Input from '@/components/input/Input';

const UiPage = () => {
    const [checked, setChecked] = useState(false);

    const input = useRef<HTMLInputElement>(null);

    return (
        <>
            <div>
                <div>input</div>
                <div>
                    <Input ref={input} />
                    <button
                        onClick={() => {
                            if (input.current) {
                                input.current.focus();
                            }
                        }}
                    >
                        focus
                    </button>
                </div>
            </div>
            <div>
                <div>button</div>
                <Button className='mr-5' variant='solid'>
                    click
                </Button>
                <Button variant='bordered'>click</Button>
            </div>
            <div>
                <div>Switch</div>
                <ToggleSwitch checked={checked} onChange={(value) => setChecked(value)} />
            </div>
        </>
    );
};

export default UiPage;
