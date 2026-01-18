import React, { Children, cloneElement, useState } from "react";
import { rulesElement } from "./utils/rules-element";

export default function WrapperSet({ children, avoidItem }) {
  function handleChange(event, active) {
    const getElement: React.HTMLElementType<InputEvent> = event.currentTarget;
    const getTag = getElement.tagName;

    rulesElement[getTag]?.(event, active);
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
