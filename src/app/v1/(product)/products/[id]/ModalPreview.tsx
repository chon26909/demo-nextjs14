'use client';
import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
    isShow: boolean;
    imageUrl: string;
    onClose: () => void;
};

const ModalPreview = (props: Props) => {
    const [show, setShow] = useState(props.isShow);

    const { isShow, onClose, imageUrl } = props;

    useEffect(() => {
        if (isShow) {
            setShow(true);
        }
        // setShow(false);
    }, [isShow]);

    return (
        <Modal isShow={show} className='w-[500px] h-[500px]'>
            <div>preview image</div>
            <Image src={imageUrl} alt='preview' width={300} height={300} />
            <Button
                variant='bordered'
                onClick={() => {
                    onClose();
                    setShow(false);
                }}
            >
                close preview
            </Button>
        </Modal>
    );
};

export default ModalPreview;
