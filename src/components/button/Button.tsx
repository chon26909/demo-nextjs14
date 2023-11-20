import React, { FC } from 'react';

type Variant = 'solid' | 'bordered';

type Button = {
    className?: string;
    variant: Variant;
    children: React.ReactNode | string;
};

const variantStyle: Record<Variant, string> = {
    solid: 'border-primary border-2 bg-primary text-white',
    bordered: 'border-primary border-2 bg-white text-primary'
};

const Button: FC<Button> = (props) => {
    const { variant, children, className, ...other } = props;

    return (
        <button
            type='button'
            className={[
                className,
                'px-10 py-3 rounded active:opacity-90',
                variantStyle[variant]
            ].join(' ')}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
