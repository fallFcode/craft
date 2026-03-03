"use client";

import LayoutBottom from "@/components/layout/layoutBottom";
import LayoutMid from "@/components/layout/layoutMid";
import LayoutTop from "@/components/layout/layoutTop";
import LayoutSlide from "@/components/layout/layoutSlide";
import { useEffect } from "react";
import { useLayoutStore } from "./store";
import useAddDefault from "@/components/hook/useAddDefault";
import { craftJson } from "@/core/schema";
import { InputCustom } from "@/components/ui/input-custom";
// import useAddDefault from "@/components/hook/useAddDefault";

export default function Home() {
  const { layoutSlide, setLayoutSlide } = useLayoutStore((state) => state);
  useAddDefault();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {layoutSlide && <LayoutSlide craftJson={craftJson} />}
        <div className="w-full px-4 sm:px-16 sm:py-8 py-2">
          <LayoutTop craftJson={craftJson} />
          <LayoutMid />
          <LayoutBottom />
        </div>
      </main>
    </div>
  );
}
