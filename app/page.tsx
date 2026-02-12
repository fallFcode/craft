"use client";

import LayoutBottom from "@/components/layout/layoutBottom";
import LayoutMid from "@/components/layout/layoutMid";
import LayoutTop from "@/components/layout/layoutTop";
import LayoutSlide from "@/components/layout/layoutSlide";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <LayoutSlide />
        <div className="w-full px-4 sm:px-16 sm:py-8 py-2">
          <LayoutTop />
          <LayoutMid />
          <LayoutBottom />
        </div>
      </main>
    </div>
  );
}
