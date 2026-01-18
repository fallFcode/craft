import { create } from "zustand";

type TypeSelect = Record<string, string | number | TypeSelect | TypeSelect[]>;
interface SelectState {
  select: TypeSelect;
  setSelectValue: (
    key: string,
    value: TypeSelect,
    deleteContent: boolean,
  ) => void;
}

export const useSelectStore = create<SelectState>((set) => ({
  select: {},
  setSelectValue: (key, value, deleteContent) => {
    if (deleteContent) {
      set((state) => {
        const duplicateObject = state.select;
        delete duplicateObject[key];
        return { ...duplicateObject };
      });
      return;
    }

    set((state) => ({
      select: { ...state.select, [key]: value },
    }));
  },
}));
