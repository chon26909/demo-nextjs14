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
                'min-w-[150px] p-2 rounded active:opacity-80',
                variantStyle[variant]
            ].join(' ')}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
