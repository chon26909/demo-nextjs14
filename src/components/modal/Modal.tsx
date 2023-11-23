import React from 'react';

type Props = {
    isShow: boolean;
    children: React.ReactNode;
    className?: string;
};

const Modal = (props: Props) => {
    const { isShow, children, className } = props;

    if (!isShow) {
        return <></>;
    }

    return (
        <div className='fixed top-0 left-0 bg-black/50 h-screen w-screen flex justify-center items-center'>
            <div className={[className, ' bg-white rounded-md p-5'].join(' ')}>{children}</div>
        </div>
    );
};

export default Modal;
