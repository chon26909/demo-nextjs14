'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import ModalPreview from './ModalPreview';

interface IPreview {
    thumbnail: string;
    images: string[];
}

const Preview: FC<IPreview> = ({ images, thumbnail }) => {
    const [previewImage, setPreviewImage] = useState<string>(thumbnail);
    const [modalPreviewImage, setModalPreviewImage] = useState(false);

    const handleMouseOver = (index: number) => {
        setPreviewImage(images[index]);
    };

    const openPreview = () => {
        setModalPreviewImage(true);
    };

    return (
        <div>
            <Image
                src={previewImage}
                placeholder='empty'
                alt={''}
                width={1000}
                height={500}
                className='rounded w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover cursor-pointer'
                onClick={openPreview}
            />
            <div className='grid grid-cols-5 gap-3 my-5'>
                {images.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image}
                            alt=''
                            width={100}
                            height={100}
                            className='w-full h-[100px] object-cover rounded cursor-pointer shadow-md'
                            onMouseOver={() => handleMouseOver(index)}
                        />
                    );
                })}
            </div>

            <ModalPreview
                isShow={modalPreviewImage}
                imageUrl={previewImage}
                onClose={() => setModalPreviewImage(false)}
            />
        </div>
    );
};

export default Preview;
