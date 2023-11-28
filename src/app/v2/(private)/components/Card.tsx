import { IProduct } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Card: FC<IProduct> = (props) => {
    const { id, title, description, price, thumbnail } = props;

    return (
        <div className='border rounded-md p-3'>
            <Link href={`/v1/products/${id}`}>
                <Image
                    src={thumbnail}
                    alt={description}
                    width={1000}
                    height={1000}
                    className='w-full h-[200px] object-cover'
                />
            </Link>

            <div className='font-bold'>{title}</div>
            <div>{price} บาท</div>
        </div>
    );
};

export default Card;
