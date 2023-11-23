import React, { ReactNode, createContext, useContext, useState } from 'react';

type ModalContextType = {
    showModal: (element: ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext({} as ModalContextType);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [modalArray, setModalArray] = useState<ReactNode[]>([]);

    const addModal = (element: ReactNode) => {
        setModalArray((previous) => [...previous, element]);
    };

    const closeModal = () => {
        setModalArray((previous) => [...previous].slice(0, -1));
    };

    const value = { showModal: addModal, closeModal: closeModal };

    return (
        <ModalContext.Provider value={value}>
            <pre>{JSON.stringify(modalArray, null, 2)}</pre>

            {modalArray.length > 0 && (
                <div className='fixed top-0 left-0 bg-black/50 h-screen w-screen flex justify-center items-center'>
                    {modalArray.map((modal, index) => {
                        return (
                            <div
                                key={index}
                                className={[
                                    'bg-white fixed rounded-md p-5 z-auto w-[300px] h-[300px]'
                                ].join(' ')}
                            >
                                {modal}
                            </div>
                        );
                    })}
                </div>
            )}
            {children}
        </ModalContext.Provider>
    );
};

const useModal = () => useContext(ModalContext);

export { ModalContextProvider, useModal };
