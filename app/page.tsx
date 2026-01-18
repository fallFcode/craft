"use client";

import LayoutBottom from "@/components/layout/layoutBottom";
import LayoutMid from "@/components/layout/layoutMid";
import LayoutTop from "@/components/layout/layoutTop";

import { FormSubmit } from "@/components/ui/form-submit";
import { useSelectStore, useTemplateStore } from "./store";

import { Input } from "@/components/ui/input";
import { craftJson } from "@/core/schema";
import InputCheckBox from "@/components/ui/input-checkbox";
import { useEffect } from "react";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IoTerminalSharp } from "react-icons/io5";
import WrapperSet from "@/components/logic/wrapper";
import { SelectButton } from "@/components/component/select-button";

export default function Home() {
  const select = useSelectStore((state) => state.select);
  const setSelect = useSelectStore((state) => state.setSelectValue);

  useEffect(() => {
    console.log(select);
  }, [select]);

  type TypeSelect = Record<string, string | number | TypeSelect | TypeSelect[]>;


  const schemaElement = {
    input: (item: TypeSelect) => (
      <WrapperSet>
        <label htmlFor="">{item.label}</label>
        <Input defaultValue={item.input} />
      </WrapperSet>
    ),
    number: (item: TypeSelect) => (
      <WrapperSet>
        <h3>{item.label}</h3>
        <Input type="number" />
      </WrapperSet>
    ),
    duration: (item: TypeSelect) => <Input type="time" />,
    check: (item: TypeSelect) => (
      <WrapperSet>
        <InputCheckBox label={item.label} />
      </WrapperSet>
    ),
    list: (item: TypeSelect) => (
      <WrapperSet>
        {/* <SelectButton item={item} setSelect={setSelect} /> */}
        <Select
          setObjectValue={(items, deletedContent) =>
            setSelect(item.label, items, deletedContent)
          }
        >
          {item.options.map((items, i) => (
            <Button key={i} value={items.value}>
              {items.value}
            </Button>
          ))}
        </Select>
      </WrapperSet>
    ),
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative ">
      <div className="absolute flex h-screen w-full">
        <ul className="bg-white shadow-xl flex  w-[70%] flex-col overflow-y-auto p-2">
          <li>
            <h2 className="font-semibold text-2xl">Feature</h2>
          </li>
          <li>Template</li>
          <li>
            <FormSubmit>
              {craftJson.map((item, i) => {
                const itemChild = item[item.label];
                return (
                  <ul key={i} className="flex flex-col">
                    <h2 className="text-green-400">{item.label}</h2>
                    {Array.isArray(itemChild) &&
                      itemChild.map((item: { mode }, i) => {
                        const mode = item?.mode;
                        if (typeof mode === "string" && mode in schemaElement) {
                          const getElement =
                            schemaElement[mode as keyof typeof schemaElement];

                          if (typeof getElement === "function") {
                            return (
                              <li key={i} className="ml-6">
                                {getElement(item)}
                              </li>
                            );
                          }
                        }
                      })}
                  </ul>
                );
              })}
            </FormSubmit>
          </li>
        </ul>
      </div>
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start px-4 sm:px-16 sm:py-8 py-2">
        <LayoutTop />
        <LayoutMid />
        <LayoutBottom />
      </main>
    </div>
  );
}
