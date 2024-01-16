'use client';

import Modal from '@/components/modal/Modal';
import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import Spinner from '@/components/spinner/Spinner';

type Props = {
    imageUrl: string;
};

const Preview = (props: Props) => {
    const [image, setImage] = useState(props.imageUrl);
    const [show, setShow] = useState(false);

    const handlePreviewImage = () => {
        setShow(true);
    };

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Image
                    placeholder='empty'
                    className='w-auto h-[200px] object-cover'
                    alt=''
                    src={props.imageUrl}
                    width={300}
                    height={200}
                    onClick={handlePreviewImage}
                />
                <Modal isShow={show}>
                    <Image
                        className='w-auto h-[200px] object-cover'
                        alt=''
                        src={props.imageUrl}
                        width={300}
                        height={200}
                    />
                    <button onClick={() => setShow(false)}>close</button>
                </Modal>
            </Suspense>
        </>
    );
};

export default Preview;
