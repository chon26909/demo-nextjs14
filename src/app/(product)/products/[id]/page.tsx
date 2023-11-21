'use client';

import Button from '@/components/button/Button';
import Spinner from '@/components/spinner/Spinner';
import { useAuth } from '@/context/AuthContext';
import { getProductId } from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

type Params = {
    id: string;
};

const ProductPage = () => {
    const params = useParams<Params>();
    const auth = useAuth();

    console.log('auth', auth);

    // Queries
    const { data, isLoading } = useQuery({
        queryKey: ['product '],
        queryFn: () => getProductId(params.id)
    });

    const [previewImage, setPreviewImage] = useState<string>();

    const handleMouseOver = (index: number) => {
        if (data) {
            console.log('handleMouseOver ', index);
            setPreviewImage(data.images[index]);
        }
    };

    useEffect(() => {
        if (data) {
            setPreviewImage(data.thumbnail);
        }
    }, [data]);

    if (!data || isLoading) {
        return <div>loading...</div>;
    }

    return (
        <Suspense fallback={<Spinner />}>
            <div className='grid grid-cols-2 gap-5 mt-20'>
                <div className='col-span-1'>
                    {previewImage && (
                        <Image
                            src={previewImage}
                            alt={data.description}
                            width={1000}
                            height={500}
                            className='rounded w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover'
                        />
                    )}

                    <div className='grid grid-cols-5 gap-3 my-5'>
                        {data &&
                            data.images.map((image, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt=''
                                        width={100}
                                        height={100}
                                        className='w-full h-[100px] object-cover rounded cursor-pointer shadow-md'
                                        onMouseOver={() => handleMouseOver(index)}
                                    />
                                );
                            })}
                    </div>
                </div>
                <div className='col-span-1 ml-5'>
                    <div className='font-bold text-[42px]'>{data.title}</div>
                    <div>{data.description}</div>
                    <div className='bg-slate-50 mt-2 p-5 flex items-center text-primary'>
                        <span className='text-4xl font-medium select-none'>฿</span>
                        <span className='pl-1 text-3xl font-bold'>{data.price}</span>
                        <span className='bg-primary ml-3 rounded text-white p-1 text-sm select-none'>
                            discount {data.discountPercentage}%
                        </span>
                    </div>
                    <div className='mt-5'>
                        <Button variant='bordered' className='px-14'>
                            Add to cart
                        </Button>
                        <Button variant='solid' className='ml-5 px-16'>
                            Buy now
                        </Button>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default ProductPage;
