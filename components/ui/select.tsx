import { useState, Children, cloneElement, useEffect } from "react";
import { useSelectStore } from "@/app/store";

export function Select({
  children,
  value,
  defaultValue,
  setObjectValue,
  avoidObject,
  onActive,
}) {
  const [select, setSelect] = useState<string>(defaultValue || "");
  const bears = useSelectStore((state) => state.select);

  useEffect(() => {
    if (avoidObject) {
    }
  }, [bears]);

  useEffect(() => {
    if (value !== select) {
      value = select;
    }
  }, [value]);

  function changeValue(event, child) {
    const getProps = child.props;

    if (getProps.children !== select) {
      setSelect((prevState) => getProps.children);
      onActive(event, true);
      setObjectValue({ value: getProps.value });
    } else {  
      setSelect((prevState) => "");
      onActive(event, false);
      setObjectValue({}, true);
    }
  }

  const validationActive = (child) =>
    child.props.children === select ? "selected" : "select";
  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          variant: validationActive(child),
          onClick: (event) => changeValue(event, child),
        }),
      )}
    </>
  );
}
