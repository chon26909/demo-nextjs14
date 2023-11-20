'use client';

import { getProducts } from '@/services/productService';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useMemo } from 'react';
import Card from './products/Card';
import Placeholder from './products/Placeholder';

const ProductsPage = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        isLoading
    } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam }) => getProducts({ page: pageParam, perPage: 5 }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            // console.log('lastPage', lastPage);
            // console.log('allPage', allPage);
            return allPage.length + 1;
        }
    });

    const products = useMemo(() => {
        if (data && data.pages) {
            let productArray = [];

            for (let i = 0; i < data.pages.length; i++) {
                const page = data.pages[i];

                if (page) {
                    for (let j = 0; j < page.products.length; j++) {
                        const item = page.products[j];

                        productArray.push(item);
                    }
                }
            }

            return productArray;
        }

        return [];
    }, [data]);

    // useEffect(() => {
    //     const ScrollEvent = window.addEventListener('scroll', () => {
    //         if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500) {
    //             console.log('isFetchingNextPage', isFetchingNextPage, 'isFetching', isFetching);
    //             if (!isFetchingNextPage && !isFetching) {
    //                 fetchNextPage();
    //             }
    //         }
    //     });

    //     return () => window.removeEventListener('scroll', () => ScrollEvent);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <>
            <div>isLoading: {String(isLoading)}</div>
            <div>isFetching: {String(isFetching)}</div>
            <div>isFetchingNextPage: {String(isFetchingNextPage)}</div>
            <div>hasNextPage: {String(hasNextPage)}</div>
            <div className='mt-10'>
                <div className='grid grid-cols-fluid gap-5'>
                    {products.map((item) => {
                        return (
                            <div key={item.id}>
                                <Card {...item} />
                            </div>
                        );
                    })}

                    {(isLoading || isFetchingNextPage) &&
                        [...Array(5)].map((_, i) => <Placeholder key={i} />)}
                </div>
            </div>

            {hasNextPage && (
                <div
                    className='mt-5 p-3 text-center bg-slate-100 hover:bg-slate-200 cursor-pointer'
                    onClick={() => fetchNextPage()}
                >
                    load more
                </div>
            )}

            {/* <ReactQueryDevtools initialIsOpen /> */}
        </>
    );
};

export default ProductsPage;
