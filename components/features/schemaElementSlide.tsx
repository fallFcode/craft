import { useSelectStore } from "@/app/store";
import { craftJson } from "@/core/schema";
import { useEffect } from "react";
import WrapperSet from "../logic/wrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import InputCheckBox from "../ui/input-checkbox";
import { Select } from "../ui/select";

type TypeSelect = Record<string, string | number | TypeSelect | TypeSelect[]>;

export const schemaElement = (setSelect) => {
  return {
    input: (item: TypeSelect, itemLabel: string) => {
      const element = (
        <WrapperSet item={item}>
          <label htmlFor="">{item.label}</label>
          <Input defaultValue={item.value} />
        </WrapperSet>
      );

      return logicReturnImportant({ element, item, itemLabel });
    },
    number: (item: TypeSelect) => (
      <WrapperSet key={item.id} item={item}>
        <h3>{item.label}</h3>
        <Input max={item.max} type="number" />
      </WrapperSet>
    ),
    duration: (item: TypeSelect) => <Input type="time" />,
    check: (item: TypeSelect) => (
      <WrapperSet item={item}>
        <InputCheckBox label={item.label} />
      </WrapperSet>
    ),
    list: (item: TypeSelect) => (
      <WrapperSet item={item}>
        <Select>
          {item.options.map((items, i) => (
            <Button key={i} value={items.value} data-id-element={items.id}>
              {items.value}
            </Button>
          ))}
        </Select>
      </WrapperSet>
    ),
  };
};

function logicReturnImportant({ element, item, itemLabel }) {
  const logicImportant = item.isImportant && itemLabel === "default";

  if (logicImportant) {
    return element;
  } else if (item.isImportant && itemLabel !== "default") {
    return null;
  }

  return element;
}
