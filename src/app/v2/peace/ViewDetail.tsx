'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ViewDetail = () => {
    const router = useRouter();

    const gotoDetail = () => {
        router.push('peace/detail');
    };

    return (
        <div>
            <div onClick={gotoDetail}>go to detail</div>
        </div>
    );
};

export default ViewDetail;
