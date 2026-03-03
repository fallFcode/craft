import * as React from "react";
import { cn } from "@/lib/utils";

type EditSection = "hours" | "minutes" | "seconds" | "milliSeconds";

interface TimelineValue {
  hours: number;
  minutes: number;
  seconds: number;
  milliSeconds: number;
}

interface InputTimelineProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> {
  value?: TimelineValue;
  onChange?: (value: TimelineValue) => void;
}

const InputTimeline = React.forwardRef<HTMLInputElement, InputTimelineProps>(
  (
    {
      className,
      value = { hours: 0, minutes: 0, seconds: 0, milliSeconds: 0 },
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<TimelineValue>(value);
    const [activeSection, setActiveSection] =
      React.useState<EditSection | null>(null);
    const [editValue, setEditValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    const display = {
      hours: internalValue.hours.toString().padStart(2, "0"),
      minutes: internalValue.minutes.toString().padStart(2, "0"),
      seconds: internalValue.seconds.toString().padStart(2, "0"),
      milliSeconds: internalValue.milliSeconds.toString().padStart(3, "0"),
    };

    const handleSectionClick = (section: EditSection, e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveSection(section);
      setEditValue(internalValue[section].toString());
      inputRef.current?.focus();
      setTimeout(() => inputRef.current?.select(), 0);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "").slice(0, 3);
      setEditValue(raw);
      if (activeSection) {
        const num = raw ? parseInt(raw, 10) : 0;
        let max = 59;

        if (activeSection === "hours") {
          max = 99;
        } else if (activeSection === "milliSeconds") {
          max = 999;
        }
        setInternalValue((prev) => ({
          ...prev,
          [activeSection]: Math.min(max, num),
        }));
      }
    };

    const handleInputBlur = () => {
      setActiveSection(null);
      setEditValue("");
      onChange?.(internalValue);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleInputBlur();
      if (e.key === "Escape") {
        setActiveSection(null);
        setEditValue("");
        setInternalValue(value);
      }
    };

    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-within:outline-none focus-within:ring-1 focus-within:ring-ring md:text-sm cursor-text",
          className,
        )}
      >
        <div className="flex items-center justify-center w-full font-mono select-none">
          <span
            className={cn(
              "px-2 py-1 rounded transition-colors",
              activeSection === "hours"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent cursor-pointer",
            )}
            onClick={(e) => handleSectionClick("hours", e)}
          >
            {display.hours}
          </span>
          <span className="text-foreground select-none">:</span>
          <span
            className={cn(
              "px-2 py-1 rounded transition-colors",
              activeSection === "minutes"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent cursor-pointer",
            )}
            onClick={(e) => handleSectionClick("minutes", e)}
          >
            {display.minutes}
          </span>
          <span className="text-foreground select-none">:</span>
          <span
            className={cn(
              "px-2 py-1 rounded transition-colors",
              activeSection === "seconds"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent cursor-pointer",
            )}
            onClick={(e) => handleSectionClick("seconds", e)}
          >
            {display.seconds}
          </span>
          <span className="text-foreground select-none">.</span>
          <span
            className={cn(
              "px-2 py-1 rounded transition-colors",
              activeSection === "milliSeconds"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent cursor-pointer",
            )}
            onClick={(e) => handleSectionClick("milliSeconds", e)}
          >
            {display.milliSeconds}
          </span>
        </div>

        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          className="fixed opacity-0 h-0 w-0"
          defaultValue={editValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          {...props}
        />
      </div>
    );
  },
);

InputTimeline.displayName = "InputTimeline";

export { InputTimeline };
