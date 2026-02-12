import React from "react";
import { Select } from "./select";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputCheckBox({ label, ...props }: InputProps) {
  return (
    <div className="flex justify-between">
      <label htmlFor="checkboxd">{label}</label>
      <input
        name="checkboxd"
        type="checkbox"
        className="appearance-none aspect-video w-6 h-6 border-2 border-stone-400 rounded checked:bg-stone-400 checked:border-transparent focus:outline-none cursor-pointer scale-75"
        {...props}
      />
    </div>
  );
}
