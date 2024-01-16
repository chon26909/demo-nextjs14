import React from 'react';
import RegisterForm from './RegisterForm';

type Props = {};

const page = (props: Props) => {
    return (
        <div className='w-screen h-screen bg-primary flex justify-center items-center'>
            <RegisterForm />
        </div>
    );
};

export default page;
