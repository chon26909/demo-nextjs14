'use client';

import Button from '@/components/button/Button';
import InputText from '@/components/input/InputText';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/authService';
import { dialogStore } from '@/components/dialog/DialogStore';
import Dialog from '@/components/dialog/Dialog';

const LoginForm = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);

    const dialog = dialogStore();

    const { mutate, mutateAsync } = useMutation({
        mutationFn: login,
        onMutate: () => setLoading(true),
        onSuccess: () => setLoading(false)
    });

    const handleLogin = () => {
        if (usernameRef.current?.value && passwordRef.current?.value) {
            //
            const data = {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            };

            mutate(data, {
                onSuccess: (res) => {
                    console.log('response', res);
                    dialog.success({ title: 'login success', descripion: '', icon: 'success' });
                },
                onError: (error) => {
                    console.log('error', error);
                }
            });
        }
    };

    const handleLoginAsync = async () => {
        if (usernameRef.current?.value && passwordRef.current?.value) {
            //
            const data = {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            };

            try {
                const res = await mutateAsync(data);
                console.log('res', res);

                dialog.success({ title: 'login success', descripion: '', icon: 'success' });
            } catch (error) {
                console.log('error', error);
            }
        }
    };

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
                    <InputText
                        ref={usernameRef}
                        label='Username'
                        defaultValue={'kminchelle'}
                        full={true}
                    />
                </div>
                <div>
                    <InputText
                        ref={passwordRef}
                        label='Password'
                        defaultValue={'0lelplR'}
                        full={true}
                    />
                </div>
                <div className='text-center'>
                    <Button variant='solid' full={true} onClick={handleLoginAsync}>
                        {loading ? 'sending...' : 'Submit'}
                    </Button>
                </div>
            </div>
            <Dialog />
        </div>
    );
};

export default LoginForm;
