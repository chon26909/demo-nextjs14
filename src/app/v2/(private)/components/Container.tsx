import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode | ReactNode[] }) => {
    return <div className='container mx-auto pt-10'>{children}</div>;
};

export default Container;
