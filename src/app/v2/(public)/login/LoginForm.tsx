'use client';
import Button from '@/components/button/Button';
import InputText from '@/components/input/InputText';
import React, { useRef } from 'react';
import { useFormState } from 'react-dom';
import { submitLogin } from './action';

type Props = {};

const LoginForm = (props: Props) => {
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const [state, formAction] = useFormState(submitLogin, { error: null });

    return (
        <form className='bg-white p-7 w-[500px] shadow-lg rounded-md'>
            <div className='text-center text-4xl font-semibold mb-5'>Login</div>
            <InputText label='Username' ref={username} full />
            <InputText label='Password' ref={password} full />
            <Button variant='solid' full>
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
