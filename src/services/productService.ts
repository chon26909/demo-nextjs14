import { IPagination } from '@/types/common';
import { dummyApi } from './axiosInstance';
import { IProduct, IProductResponse } from '@/types/product';
import { resolve } from 'path';

export const getProducts = async ({ page, perPage }: IPagination) => {
    await new Promise((rosolve) => setTimeout(rosolve, 3000));

    const limit = perPage;
    const skip = perPage * (page - 1);

    try {
        const res = await dummyApi.get<IProductResponse>(`/products`, {
            params: {
                limit: limit,
                skip: skip
                // select: 'title,price'
            }
        });

        return res.data;
    } catch (error) {
        console.log('error', error);
    }
};

export const getProductId = async (id: string) => {
    try {
        const res = await dummyApi.get<IProduct>(`/products/` + id);
        return res.data;
    } catch (error) {
        console.log('error', error);
    }
};
