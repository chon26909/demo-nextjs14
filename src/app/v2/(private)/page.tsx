import React, { Suspense } from 'react';
import Products from './components/Products';
import Spinner from '@/components/spinner/Spinner';
import ProductCategory, { CategoryPlacehoder } from './components/Category';
import Container from './components/Container';

const page = () => {
    return (
        <Container>
            {/* <Suspense fallback={<Spinner />}>
                <Products />
            </Suspense> */}

            <ProductCategory category='smartphones' />

            {/* <Suspense fallback={<CategoryPlacehoder />}>
                <ProductCategory category='laptops' />
            </Suspense> */}
        </Container>
    );
};

export default page;
