import * as React from "react";
import { cn } from "@/lib/utils";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (value: string) => void;
  prefix?: string;
  suffix?: string;
  formatTemplate?: string; // e.g., "language={{input}}" atau "{{input}}k"
}

const InputCustom = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      className,
      value = "",
      onChange,
      prefix = "",
      suffix = "",
      formatTemplate,
      ...props
    },
    ref,
  ) => {
    // const [isEditing, setIsEditing] = React.useState(false);
    const [localValue, setLocalValue] = React.useState("");
    // const inputRef = React.useRef<HTMLInputElement>(null);

    // determine if the component is controlled by props
    const isControlled = value !== undefined;
    // the value we consider current: either the prop (controlled) or our own local state
    const actualValue = isControlled ? value : localValue;

    // Format output berdasarkan template atau prefix/suffix
    const formatOutput = (input: string): string => {
      if (!input) return "";
      if (formatTemplate) {
        const getFormatTemplate = formatTemplate.replace("{{input}}", input);
        setLocalValue(getFormatTemplate);
        return "";
      }
      return prefix + input + suffix;
    };

    // Extract input value dari formatted value
    const extractInput = (formatted: string): string => {
      if (formatTemplate) {
        const parts = formatTemplate.split("{{input}}");
        if (parts.length === 2) {
          const [before, after] = parts;
          let extracted = formatted;
          if (before && formatted.startsWith(before)) {
            extracted = formatted.slice(before.length);
          }
          if (after && extracted.endsWith(after)) {
            extracted = extracted.slice(0, -after.length);
          }
          return extracted;
        }
        return formatted;
      }
      // Handle prefix/suffix
      let extracted = formatted;
      if (prefix && formatted.startsWith(prefix)) {
        extracted = formatted.slice(prefix.length);
      }
      if (suffix && extracted.endsWith(suffix)) {
        extracted = extracted.slice(0, -suffix.length);
      }
      return extracted;
    };

    // Sync hanya jika value dari props berubah (controlled mode) dan tidak sedang editing
    React.useEffect(() => {
      if (isControlled && value !== localValue) {
        setLocalValue(value);
      }
    }, [value, isControlled]);
    function tes()

    const handleContainerClick = () => {
      // if already editing, don't reset the value (prevents clicks inside the input
      // from blowing away what the user typed)
      // if (isEditing) return;

      // setIsEditing(true);
      const extracted = extractInput(actualValue || "");
      setLocalValue(extracted);

      // setTimeout(() => {
      //   inputRef.current?.focus();
      //   inputRef.current?.select();
      // }, 0);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
    };

    const handleInputBlur = () => {
      // setIsEditing(false);
      const formattedValue = formatOutput(localValue);
      // if uncontrolled, keep our own copy so it persists after blur
      if (!isControlled) {
        setLocalValue(formattedValue);
      }
      onChange?.(formattedValue);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleInputBlur();
      }
      if (e.key === "Escape") {
        // setIsEditing(false);
        setLocalValue(extractInput(actualValue || ""));
      }
    };

    // when not editing, show formatted version of the current value (prop or local)
    // const displayValue = isEditing ? localValue : formatOutput(actualValue);

    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-within:outline-none focus-within:ring-1 focus-within:ring-ring md:text-sm cursor-text",
          className,
        )}
        onClick={handleContainerClick}
      >
        <input
          type="text"
          className={cn(
            "flex-1 bg-transparent outline-none",
            // isEditing ? "block" : "hidden",
          )}
          ref={ref}
          value={localValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          {...props}
        />
      </div>
    );
  },
);

InputCustom.displayName = "InputCustom";

export { InputCustom };
