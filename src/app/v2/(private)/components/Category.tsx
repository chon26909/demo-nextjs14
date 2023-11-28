import { getComments } from '@/services/commentService';
import { getProductByCategory } from '@/services/productService';
import React, { Suspense } from 'react';
import Card from './Card';

type Props = {
    category: string;
};

const ProductCategory = async (props: Props) => {
    return (
        <div>
            <div className='text-4xl font-semibold'>{props.category}</div>
            <Suspense fallback={<CategoryPlacehoder />}>
                <ProductList category={props.category} />
            </Suspense>
        </div>
    );
};

export default ProductCategory;

const ProductList = async (props: Props) => {
    const data = await getProductByCategory(props.category);

    console.log('data', data);

    return (
        <div>
            <div className='grid grid-cols-fluid gap-5'>
                {data?.products?.map((item) => {
                    return (
                        <div key={item.id}>
                            <Card {...item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const CategoryPlacehoder = () => {
    return (
        <div role='status' className='animate-pulse mb-10'>
            {/* <div className='flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
                <svg
                    className='w-10 h-10 text-gray-200 dark:text-gray-600'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 18'
                >
                    <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                </svg>
            </div> */}
            <div className='w-full'>
                <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-300 w-[400px] mb-4'></div>
                <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[680px] mb-2.5'></div>
            </div>
            <div className='w-full'>
                <div>
                    <div className='flex items-center justify-center w-full h-[200px] bg-gray-300 rounded dark:bg-gray-300'>
                        <svg
                            className='w-10 h-10 text-gray-200 dark:text-gray-500'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 20 18'
                        >
                            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                        </svg>
                    </div>
                </div>
            </div>
            <span className='sr-only'>Loading...</span>
        </div>
    );
};
