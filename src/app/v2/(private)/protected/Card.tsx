import { IProduct } from '@/types/product';
import React, { Suspense } from 'react';
import Preview from './Preview';

const Card = (props: IProduct) => {
    return (
        <div className='border rounded-lg overflow-hidden h-[300px] shadow-lg'>
            <div>
                <Preview imageUrl={props.thumbnail} />
            </div>
            <div className='p-3'>
                <div className='font-bold text-lg'>{props.title}</div>
                <div className='text-sm'>{props.description}</div>
            </div>
        </div>
    );
};

export default Card;
