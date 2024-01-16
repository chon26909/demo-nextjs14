'use client';

import React, { useRef, useState } from 'react';
import InputText from './InputText';

type Props = {};

const InputPhone = (props: Props) => {
    const inputPhone = useRef<HTMLInputElement>(null);
    const [isPatseFirst, setIsPatseFirst] = useState(false);

    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1-$2') // 0930 => 093-0
            .replace(/(-\d{3})(\d)/, '$1-$2') // 093-7222 => 093-722-2
            .replace(/(-\d{4})(\d+?)$/, '$1'); // 093-722-2222 => 093-722-2222
    };

    const onChangeInputPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = maskPhone(e.target.value);

        if (inputPhone.current) {
            let cursorStart = Number(e.target.selectionStart);

            inputPhone.current.value = masked;

            const nativeEvent = e.nativeEvent as InputEvent;
            if (nativeEvent.inputType == 'insertText') {
                if (cursorStart === 4 || cursorStart === 8) {
                    cursorStart += 1;
                }
                inputPhone.current.setSelectionRange(cursorStart, cursorStart);
            } else if (nativeEvent.inputType == 'insertFromPaste') {
                if (cursorStart < 10) {
                    if (cursorStart >= 4) {
                        cursorStart += 1;
                    }
                    if (cursorStart >= 7) {
                        cursorStart += 1;
                    }
                    inputPhone.current.setSelectionRange(cursorStart, cursorStart);
                } else {
                    inputPhone.current.setSelectionRange(masked.length, masked.length);
                }
            } else if (nativeEvent.inputType == 'deleteContentBackward') {
                if (cursorStart === 4 || cursorStart === 8) {
                    cursorStart -= 1;
                }
                inputPhone.current.setSelectionRange(cursorStart, cursorStart);
            }
        }
    };

    return (
        <div>
            <InputText
                // label='Phone'
                className='w-full'
                ref={inputPhone}
                type='tel'
                defaultValue='0123456789'
                onChange={onChangeInputPhone}
            />
        </div>
    );
};

export default InputPhone;
