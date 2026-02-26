import { useSelectStore } from "@/app/store";
import { craftJson } from "@/core/schema";
import { useEffect, useState } from "react";

interface TypeUseAddDefault {}

function useAddDefault() {
  const { select,setSelectValue:setSelect } = useSelectStore((state) => state);

  useEffect(() => {
    type commonCraftType = {
      label: string;
      flag: string;
      order: number;
      value: boolean;
      mode: string;
      isImportant: boolean;
    };
    const getDefault: commonCraftType[] =
      craftJson[craftJson.length - 1].default;

    for (let index = 0; index < getDefault.length; index++) {
      const element = getDefault[index];

      const getLabel = element.label;
      const getOrder = element.order;
      const getFlag = element.flag;
      const getValue = element.value;

      setSelect(getLabel, {
        order: getOrder,
        flag: getFlag,
        value: getValue,
        label: getLabel,
      });
    }
  }, []);
  return;
}

export default useAddDefault;
