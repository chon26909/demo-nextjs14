import React from 'react';
import Card from './Card';
import { IProduct } from '@/types/product';
import { getProducts } from '@/services/productService';

const getP = async () => {
    try {
        //await new Promise((resolve) => setTimeout(resolve, 1500));

        const res = await fetch('https://dummyjson.com/products?limit=100');

        const r = await res.json();

        // console.log(r);

        // const res = await axios.get('https://dummyjson.com/products');

        // const r = res.data;

        return (r.products as IProduct[]) || [];
    } catch (error) {
        console.log('error');

        return [];
    }
};

const page = async () => {
    //const products = await getProductsTest({ page: 1, perPage: 10 });

    const res = await getProducts({ page: 1, perPage: 10 });

    return (
        <div>
            {/* <Suspense fallback={<Spinner />}> */}
            <div className='grid grid-cols-2 gap-4 border p-3'>
                {res?.products.map((item: IProduct) => {
                    return <Card key={item.id} {...item} />;
                })}
            </div>
            {/* </Suspense> */}
        </div>
    );
};

export default page;
