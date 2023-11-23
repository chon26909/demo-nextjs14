import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes } from 'react';

type Variant = 'solid' | 'bordered';
interface Button {
    className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
    full?: boolean;
    variant: Variant;
    children: React.ReactNode | string;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const variantStyle: Record<Variant, string> = {
    solid: 'border-primary border-2 bg-primary text-white',
    bordered: 'border-primary border-2 bg-white text-primary'
};

const Button: FC<Button> = (props) => {
    const { variant, full, children, className, ...other } = props;

    return (
        <button
            type={'button'}
            className={[
                className,
                full ? 'w-full' : 'w-[150px]',
                'p-2 rounded active:opacity-80',
                variantStyle[variant]
            ].join(' ')}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
