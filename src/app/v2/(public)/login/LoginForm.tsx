'use client';
import Button from '@/components/button/Button';
import InputText from '@/components/input/InputText';
import React, { useEffect, useRef } from 'react';
// import { useFormState } from 'react-dom';
// import { submitLogin } from './action';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

type Props = {};

const LoginForm = (props: Props) => {
    const router = useRouter();

    const form = useRef<HTMLFormElement>(null);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    // const [state, formAction] = useFormState(submitLogin, { error: null });

    // useEffect(() => {
    //     const redirect = () => {
    //         if (state.message == 'success') {
    //             router.replace('/v2');
    //         }
    //     };

    //     redirect();
    // }, [state, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                username: username.current?.value,
                password: password.current?.value,
                redirect: false
            });

            if (res?.ok) {
                router.replace('/v2');
                router.refresh();
            }

            console.log('res', res);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
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
            <Button type='submit' variant='solid' full={true}>
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
