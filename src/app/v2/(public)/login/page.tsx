import React from 'react';
import LoginForm from './LoginForm';

type Props = {};

function page({}: Props) {
    return (
        <div className='w-screen h-screen bg-primary flex justify-center items-center'>
            <LoginForm />
        </div>
    );
}

export default page;
