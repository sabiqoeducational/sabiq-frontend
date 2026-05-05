"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  options: readonly string[] | string[];
  placeholder: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
}

export const CustomSelect = ({
  options,
  placeholder,
  onChange,
  hasError,
}: CustomSelectProps) => {
  const [selected, setSelected] = useState("");
  const handleSelect = (value: string) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className="space-y-2  w-full" dir="rtl">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          {/* Main Button */}
          <Listbox.Button
            className={`
            relative w-full p-3 text-right bg-[#F8FAFF] border rounded-lg text-sm cursor-pointer
            focus:outline-none transition-all duration-200
            ${selected ? "text-[#0D1530]" : "text-gray-500"}
            ${
              hasError
                ? "bg-red-50  text-red-900 border-red-500"
                : "bg-[#F8FAFF] border-[#D8DCF0] text-gray-600 focus:border-[#156AE1]"
            }
            border-[#D8DCF0] hover:border-[#156AE1]
            ui-open:border-[#D8DCF0]
          `}
          >
            <span className="block truncate">{selected || placeholder}</span>
            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#0D1530]">
              <ChevronDown
                size={20}
                strokeWidth={3}
                className="ui-open:rotate-180 transition-transform duration-200 text-[#6B7280]"
              />
            </span>
          </Listbox.Button>

          {/* Dropdown Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-2 max-h-80 w-full overflow-auto rounded-lg bg-[#EEF0F8] shadow-lg   focus:outline-none">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active, selected: isSelected }) =>
                    `relative cursor-pointer select-none py-2 px-5 text-right text-sm transition-colors
                    ${isSelected ? "bg-[#1A78F2] text-white" : "text-[#0D1530]"}
                  ${active ? "bg-[#1A78F2] text-white" : "text-[#0D1530]"}
                    ${index !== options.length - 1 ? "border-b border-[#D8DCF0]/50" : ""}

                    `
                  }
                  value={option}
                >
                  {({ selected: isSelected }) => (
                    <span
                      className={`block truncate ${isSelected ? "font-bold" : "font-normal"}`}
                    >
                      {option}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
