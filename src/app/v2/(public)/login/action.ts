'use server';

import { login } from '@/services/authService';
import { revalidatePath } from 'next/cache';

export const submitLogin = async (prevState: any, formData: FormData) => {
    console.log(formData);

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username) {
        return { error: 'username require' };
    }

    if (!password) {
        return { error: 'password require' };
    }

    try {
        const res = await login({ username, password });
        console.log('res', res.data);
    } catch (error) {
        console.log('error', error);
    }

    // revalidatePath('/');
    return { error: null };
};
