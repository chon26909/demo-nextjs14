import { useState } from 'react';

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, setValue: (value: T) => void] {
    const [state, setState] = useState<T>(() => {
        // Initialize the state
        try {
            const value = window.localStorage.getItem(key);
            // Check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) : initialValue;
        } catch (error) {
            console.log(error);
        }
    });

    const setValue = (value: T) => {
        try {
            // If the passed value is a callback function,
            //  then call it with the existing state.
            const valueToStore = value instanceof Function ? value(state) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
        } catch (error) {
            console.log(error);
        }
    };

    return [state, setValue];
}

export default useLocalStorage;

// export function useLocalStorage<T>(key: string, fallbackValue: T) {
//     const [value, setValue] = useState(fallbackValue);
//     useEffect(() => {
//         const stored = localStorage.getItem(key);

//         if (stored) {
//             console.log('JSON.parse(stored)', JSON.parse(stored));
//         }

//         setValue(stored ? JSON.parse(stored) : fallbackValue);
//     }, [fallbackValue, key]);

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [value, setValue] as const;
// }
