import { craftJson } from "@/core/schema";
import { FormSubmit } from "../ui/form-submit";

import { Button } from "../ui/button";

import { useSelectStore } from "@/app/store";
import { useEffect } from "react";
import { schemaElement } from "../features/schemaElementSlide";

export default function LayoutSlide() {
  const setSelect = useSelectStore((state) => state.setSelectValue);

  useEffect(() => {
    type commonCraftType = {
      label: string;
      flag: string;
      id: number;
      value: boolean;
      mode: string;
      isImportant: boolean;
    };
    const getDefault: commonCraftType[] =
      craftJson[craftJson.length - 1].default;

    for (let index = 0; index < getDefault.length; index++) {
      const element = getDefault[index];

      const getLabel = element.label;
      const getId = element.id;
      const getFlag = element.flag;
      const getValue = element.value;

      setSelect(getLabel, {
        id: getId,
        flag: getFlag,
        value: getValue,
        label: getLabel,
      });
    }
  }, []);

  const schemaElements = schemaElement(setSelect);
  type SchemaKey = keyof typeof schemaElements;

  return (
    <div className="absolute flex h-screen w-full place-self-start">
      <ul className="bg-white shadow-xl flex  w-[40%] flex-col overflow-y-auto p-2">
        <li className="border-b-4">
          <h2 className="font-semibold text-2xl">Feature</h2>
        </li>
        <li className="mt-2">
          <ul className="flex gap-4">
            <li>
              <Button>Template</Button>
            </li>
            <li>
              <Button>FullHD</Button>
            </li>
          </ul>
        </li>
        <li className="gap-4 flex flex-col">
          <FormSubmit>
            {craftJson.map((item, i) => {
              const itemChild = item[item.label];
              return (
                <ul key={i} className="flex flex-col ml-5 relative">
                  <div className="-left-3 border-l-2 rounded-xl absolute min-w-[30px] max-w-[50%] h-[86%] top-3 hover:border-l-stone-900"></div>
                  <h2 className="text-stone-800 font-bold">{item.label}</h2>
                  {/* <h3>...</h3> */}
                  {Array.isArray(itemChild) &&
                    (itemChild as { mode: SchemaKey }[]).map(
                      (itemsChild: { mode: SchemaKey }, i) => {
                        const mode = itemsChild?.mode;
                        if (
                          typeof mode === "string" &&
                          mode in schemaElements
                        ) {
                          const getElement =
                            schemaElements[mode as keyof typeof schemaElements];

                          if (typeof getElement === "function") {
                            return (
                              <li key={i} className="ml-6">
                                {getElement(itemsChild, item.label)}
                              </li>
                            );
                          }
                        }
                      },
                    )}
                </ul>
              );
            })}
          </FormSubmit>
        </li>
      </ul>
    </div>
  );
}
