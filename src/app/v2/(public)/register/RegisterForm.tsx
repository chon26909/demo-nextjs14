'use client';

import Button from '@/components/button/Button';
import InputPhone from '@/components/input/InputPhone';
import InputText from '@/components/input/InputText';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

type Props = {};

const RegisterForm = (props: Props) => {
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
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div>
            <form
                ref={form}
                onSubmit={handleSubmit}
                className='bg-white p-7 w-[500px] shadow-lg rounded-md'
            >
                <div className='text-center text-2xl font-semibold mb-5'>เบอร์โทรศัพท์</div>
                {/* <InputText
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
                <InputText
                    type='password'
                    label='Confirm Password'
                    name='password'
                    ref={password}
                    defaultValue='0lelplR'
                    full={true}
                /> */}
                <InputPhone />
                <Button type='submit' variant='solid' full={true}>
                    ยืนยัน
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;
