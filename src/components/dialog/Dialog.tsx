import React from 'react';
import Modal from '../modal/Modal';
import { dialogStore } from './DialogStore';
import Button from '../button/Button';

type Props = {};

const Dialog = (props: Props) => {
    const { isOpen, title, close } = dialogStore();

    const handleClick = () => {
        close();
    };

    return (
        <Modal isShow={isOpen}>
            <div className='font-bold text-2xl text-center'>{title}</div>
            <div className='flex justify-between mt-5'>
                <Button variant='solid' onClick={() => handleClick()}>
                    confirm
                </Button>
                <Button variant='bordered' onClick={() => handleClick()}>
                    cancel
                </Button>
            </div>
        </Modal>
    );
};

export default Dialog;
