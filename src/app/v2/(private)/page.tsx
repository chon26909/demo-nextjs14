import React, { Suspense } from 'react';
import Products from './components/Products';
import Spinner from '@/components/spinner/Spinner';
import ProductCategory, { CategoryPlacehoder } from './components/Category';
import Container from './components/Container';

const page = () => {
    return (
        <Container>
            <ProductCategory category='smartphones' />
            <ProductCategory category='laptops' />
            <ProductCategory category='sunglasses' />
            <ProductCategory category='lighting' />
            <ProductCategory category='motorcycle' />
        </Container>
    );
};

export default page;
