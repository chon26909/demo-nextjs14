import Spinner from '@/components/spinner/Spinner';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-100 flex-col'>
            <Spinner />
        </div>
    );
};

export default Loading;
