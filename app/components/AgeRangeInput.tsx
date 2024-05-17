import React, { ChangeEvent, useState } from "react";

interface AgeRangeInputProps {
  min: number;
  max: number;
  label?: string;
  onChange: (value: any) => void;
  value?: string | number;
}

const AgeRangeInput = (props: AgeRangeInputProps) => {


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
          {props?.value}
        </div>
      </div>
      <input
        id="age-range"
        type="range"
        value={props?.value}
        min={props?.min}
        max={props?.max}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => props?.onChange(e)}
      />
    </>
  );
};

export default AgeRangeInput;
