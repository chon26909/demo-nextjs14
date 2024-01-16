import React, { Suspense } from 'react';
import Products from './components/Products';
import Spinner from '@/components/spinner/Spinner';
import ProductCategory, { CategoryPlacehoder } from './components/Category';
import Container from './components/Container';
import InputPhone from '@/components/input/InputPhone';
import Header from './Header';

const page = () => {
    return (
        <Container>
            <Header />
            {/* <InputPhone /> */}
            <ProductCategory category='smartphones' />
            <ProductCategory category='laptops' />
            <ProductCategory category='sunglasses' />
            <ProductCategory category='lighting' />
            <ProductCategory category='motorcycle' />
        </Container>
    );
};

export default page;
