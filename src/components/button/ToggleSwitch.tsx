import React, { FC } from 'react';
import './ToggleSwitch.scss';

interface IToggleSwitch {
    checked: boolean;
    onChange: (value: boolean) => void;
}

const ToggleSwitch: FC<IToggleSwitch> = ({ checked, onChange }) => {
    return (
        <label className='switch'>
            <input
                type='checkbox'
                checked={checked}
                onChange={(event) => onChange(event.target.checked)}
            />
            <span className='slider' />
        </label>
    );
};

export default ToggleSwitch;
