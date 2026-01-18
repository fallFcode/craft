import React from "react";
import { Select } from "./select";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputCheckBox({ label, ...props }: InputProps) {
  return (
    <div className="flex border-2 ">
      <label htmlFor="checkboxd">{label}</label>
      <input
        name="checkboxd"
        type="checkbox"
        className="appearance-none w-6 h-6 border-2 border-pink-400 rounded checked:bg-pink-400 checked:border-transparent focus:outline-none cursor-pointer"
        {...props}
      />
    </div>
  );
}
