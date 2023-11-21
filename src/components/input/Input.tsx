import React, { forwardRef, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { errorMessage } = props;

    return (
        <div>
            <div>
                <input ref={ref} {...props} />
            </div>
            <div>{errorMessage}</div>
        </div>
    );
});

Input.displayName = 'InputText';
export default Input;
