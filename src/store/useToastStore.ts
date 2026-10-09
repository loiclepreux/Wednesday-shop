import { create } from "zustand";

interface ToastState {
    message: string | null;
    showToast: (message: string) => void;
}

let timer: ReturnType<typeof setTimeout> | undefined;

export const useToastStore = create<ToastState>((set) => ({
    message: null,

    showToast: (message) => {
        clearTimeout(timer);
        set({ message });
        timer = setTimeout(() => set({ message: null }), 3000);
    },
}));
