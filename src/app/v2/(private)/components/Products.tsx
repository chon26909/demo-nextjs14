import { getProducts } from '@/services/productService';
import React from 'react';

const Products = async () => {
    const data = await getProducts({ page: 1, perPage: 10 });

    return <div>Products</div>;
};

export default Products;
