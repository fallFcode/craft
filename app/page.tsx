"use client";

import LayoutBottom from "@/components/layout/layoutBottom";
import LayoutMid from "@/components/layout/layoutMid";
import LayoutTop from "@/components/layout/layoutTop";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start px-16 py-8">
        <LayoutTop />
        <LayoutMid />
        <LayoutBottom />
      </main>
    </div>
  );
}
