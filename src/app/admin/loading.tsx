import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const LoadingAdminLayout = () => {
    return (
        <div className='flex justify-center w-full'>
            <Spinner />
        </div>
    );
};

export default LoadingAdminLayout;
