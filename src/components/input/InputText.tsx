import React, { forwardRef, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    full?: boolean;
    errorMessage?: string;
}

const inputClass =
    'text-[16px] mt-1 px-3 py-2 bg-white border shadow-sm border-gray_text rounded placeholder-slate-400 focus:outline-none';

const InputText = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const { full, errorMessage } = props;

    return (
        <div>
            <div>
                <input
                    ref={ref}
                    type='text'
                    className={[
                        full ? 'w-full' : 'w-[250px]',
                        errorMessage && errorMessage.length > 0
                            ? '!border-red ring-1 ring-red'
                            : 'focus:border-primary focus:ring-1 ring-primary',
                        inputClass
                    ].join(' ')}
                    {...props}
                />
            </div>
            <div>{errorMessage}</div>
        </div>
    );
});

InputText.displayName = 'InputText';
export default InputText;
