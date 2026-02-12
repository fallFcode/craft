import React, { Children, cloneElement, useState } from "react";
import { rulesElement } from "./utils/rules-element";
import { useSelectStore } from "@/app/store";

type WrapperSetProps = {
  children: React.ReactNode;
  item: any;
};

export default function WrapperSet({ children, item }: WrapperSetProps) {
  const select = useSelectStore((state) => state.select);
  const setSelect = useSelectStore((state) => state.setSelectValue);

  function handleChange(event, active) {
    const getElement: React.HTMLElementType<InputEvent> = event.currentTarget;
    const getTag = getElement.tagName;
    
    rulesElement[getTag]?.({ event, active, setSelect, item });
  }
  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          onChange: handleChange,
          onActive: handleChange,
        }),
      )}
    </>
  );
}
