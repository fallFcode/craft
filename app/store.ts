import { create } from "zustand";

type TypeSelect = Record<string, string | number | TypeSelect | TypeSelect[]>;
interface SelectState {
  select: TypeSelect;
  setSelectValue: (
    key: string,
    value: TypeSelect,
    deleteContent?: boolean,
  ) => void;
}

export const useSelectStore = create<SelectState>((set) => ({
  select: {},
  setSelectValue: (key, value, deleteContent) => {
    set((state) => {
      if (deleteContent) {
        const duplicateObject = state.select;
        console.log(duplicateObject[key]);
        delete duplicateObject[key];
        return { select: { ...duplicateObject } };
      }
      return { select: { ...state.select, [key]: value } };
    });
  },
}));

interface LayoutState {
  layoutSlide: boolean;
  setLayoutSlide: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  layoutSlide: false,
  setLayoutSlide: () => set((state) => ({ layoutSlide: !state.layoutSlide })),
}));
