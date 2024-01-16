'use client';
import React, { useMemo, useRef, useState } from 'react';

type Props = {};

const RE_DIGIT = new RegExp(/^\d+$/);

const InputOTP = (props: Props) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [value, setValue] = useState('');

    const valueLength = 6;

    const otpList = useMemo(() => {
        const valueArray = value.split('');
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [value, valueLength]);

    // const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    //     const target = e.target;
    //     const targetValue = target.value;

    //     if (!RE_DIGIT.test(targetValue)) {
    //         return;
    //     }

    //     const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);

    //     console.log('new value: ', newValue);

    //     setValue(newValue);

    //     const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

    //     if (nextElementSibling) {
    //         nextElementSibling.focus();
    //     }
    // };

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const target = e.target;
        let targetValue = target.value;
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : ' ';

        const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);

        setValue(newValue);

        if (!isTargetValueDigit) {
            return;
        }

        moveToNextBox(target);
    };

    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }

        moveToPreviousBox(target);
    };

    const inputOnPaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        console.log('paste index: ' + index);

        //  e.preventDefault();

        // const text = e.clipboardData.getData('Text');
        // setValue((s) => {
        //     if (index == 0) {
        //         return text;
        //     }
        //     const a = s.substring(index, valueLength - index).trim();

        //     console.log('a', a);

        //     return s;
        // });

        // inputRefs;
    };

    const moveToNextBox = (target: EventTarget & HTMLInputElement) => {
        const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;
        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    const moveToPreviousBox = (target: EventTarget & HTMLInputElement) => {
        const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;
        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    return (
        <div className='flex gap-3'>
            {otpList.map((digit, idx) => {
                return (
                    <input
                        ref={(ref) => (inputRefs.current[idx] = ref)}
                        key={idx}
                        value={digit}
                        type='tel'
                        autoComplete='one-time-code'
                        pattern='\d{1}'
                        maxLength={1}
                        className='border border-red-700 w-10 p-1 text-center rounded'
                        onChange={(e) => inputOnChange(e, idx)}
                        onKeyUp={inputOnKeyDown}
                        onPaste={(e) => inputOnPaste(e, idx)}
                    />
                );
            })}
        </div>
    );
};

export default InputOTP;
