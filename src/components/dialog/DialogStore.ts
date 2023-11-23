import { create } from 'zustand';

type IconType = 'success' | 'warning' | 'error' | undefined;

type Dialog = {
    title: string;
    descripion: string;
    icon: IconType;
};

type DialogState = {
    isOpen: boolean;
    title: string;
    description: string;
    icon: IconType;
    success: (data: Dialog) => void;
    close: () => void;
};

export const dialogStore = create<DialogState>()((set) => ({
    isOpen: false,
    title: '',
    description: '',
    icon: undefined,
    success: (data) => {
        set(() => {
            return {
                isOpen: true,
                title: data.title,
                description: data.descripion,
                icon: data.icon
            };
        });
    },
    close: () => {
        set(() => {
            return {
                isOpen: false,
                title: '',
                description: '',
                icon: undefined
            };
        });
    }
}));
