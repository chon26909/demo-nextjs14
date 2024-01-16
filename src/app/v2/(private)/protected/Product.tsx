import { getProducts, getProductsTest } from '@/services/productService';
import React, { Suspense } from 'react';
import Card from './Card';
import axios from 'axios';
import { IProduct } from '@/types/product';

const getP = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const res = await fetch('https://dummyjson.com/products?limit=100');

        const r = await res.json();

        return (r.products as IProduct[]) || [];
    } catch (error) {
        console.log('error');

        return [];
    }
};

const Product = async () => {
    const products = await getP();

    return (
        <div>
            <div className='grid grid-cols-2 gap-4 border p-3'>
                {products.map((item: IProduct) => {
                    return <Card key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Product;
