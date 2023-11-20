import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const loading = () => {
    return (
        <div className='w-full flex justify-center'>
            <Spinner />
        </div>
    );
};

export default loading;
