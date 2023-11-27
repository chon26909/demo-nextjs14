'use server';

import { revalidatePath } from 'next/cache';

export const submitLogin = (prevState: any, formData: FormData) => {
    const message = formData.get('message');

    if (!message || message.toString().length < 5) {
        console.log('error:' + message);
        return { error: 'too short' };
    }

    revalidatePath('/');
    return { error: null };
};
