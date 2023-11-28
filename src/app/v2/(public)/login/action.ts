'use server';

import { login } from '@/services/authService';
import { revalidatePath } from 'next/cache';

export const submitLogin = async (previous: any, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
        return { message: 'success', data: res.data };
    } catch (error) {
        console.log('error', error);
        return { error: error };
    }

    // revalidatePath('/');
};
