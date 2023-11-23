'use client';

import Button from '@/components/button/Button';
import InputText from '@/components/input/InputText';
import React, { useEffect, useRef } from 'react';

const LoginForm = () => {
    const usernameRef = useRef<HTMLInputElement>(null);

    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        usernameRef.current?.focus();
    }, []);

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-primary'>
            <div className='bg-white w-[500px] p-7 rounded shadow-xl'>
                <div>
                    <div className='text-center text-4xl font-semibold mb-4'>Login</div>
                </div>
                <div>
                    <InputText ref={usernameRef} label='Username' full />
                </div>
                <div>
                    <InputText ref={passwordRef} label='Password' full />
                </div>
                <div>
                    <Button variant='solid' full>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
