'use client';
import Button from '@/components/button/Button';
import InputText from '@/components/input/InputText';
import React, { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitLogin } from './action';

type Props = {};

const LoginForm = (props: Props) => {
    const form = useRef<HTMLFormElement>(null);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const [state, formAction] = useFormState(submitLogin, { error: null });
    const { pending } = useFormStatus();

    return (
        <form
            ref={form}
            action={(formData: FormData) => formAction(formData)}
            className='bg-white p-7 w-[500px] shadow-lg rounded-md'
        >
            <div className='text-center text-4xl font-semibold mb-5'>Login</div>
            <InputText
                type='text'
                label='Username'
                name='username'
                ref={username}
                defaultValue='kminchelle'
                full={true}
            />
            <InputText
                type='password'
                label='Password'
                name='password'
                ref={password}
                defaultValue='0lelplR'
                full={true}
            />
            <Button type='submit' variant='solid' disabled={pending} full>
                {pending ? 'Submiting...' : 'Submit'}
            </Button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <pre>{String(pending)}</pre>
        </form>
    );
};

export default LoginForm;
