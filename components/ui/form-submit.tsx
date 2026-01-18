import { Children, isValidElement } from "react";

export function FormSubmit({ children }) {
  const childrenWithProps = Children.map(children, (child) => {
    if (!isValidElement(child)) return;

    return child;
  });

  return <>{childrenWithProps}</>;
}
