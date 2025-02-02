import { create } from "zustand";

type AlertStore = {
  open: boolean;
  text: string;
  closeAlert: () => void;
  openAlert: (text: string) => void;
};

const useAlertStore = create<AlertStore>()((set) => ({
  open: false,
  text: "",
  closeAlert: () => set((state) => ({ open: false, text: "" })),
  openAlert: (text) => set((state) => ({ open: true, text })),
}));

export { useAlertStore };
