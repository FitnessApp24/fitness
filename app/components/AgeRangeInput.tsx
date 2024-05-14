import React, { ChangeEvent, useState } from "react";

interface AgeRangeInputProps {
  min: number;
  max: number;
  initialValue?: number;
  label?: string;
}

const AgeRangeInput = (props: AgeRangeInputProps) => {
  const [selectedAge, setSelectedAge] = useState(props?.initialValue ?? 50);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAge(+event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <label
          htmlFor="age-range"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          {props?.label}
        </label>
        <div className="mt-2 text-gray-700 dark:text-gray-300">
          {selectedAge}
        </div>
      </div>
      <input
        id="age-range"
        type="range"
        value={selectedAge}
        min={props?.min}
        max={props?.max}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleChange}
      />
    </>
  );
};

export default AgeRangeInput;
