import React, { ChangeEvent, useEffect, useState } from "react";
import AgeRangeInput from "../AgeRangeInput";
import { initialValue } from "../Stepper";

interface MoreAboutYouProps {
  nextStep: () => void;
  prevStep: () => void;
  data: typeof initialValue;
  onChange?: {
    (stepNumber: string): (name: string, value: string | number) => void;
  };
}

const MoreAboutYou = (props: MoreAboutYouProps) => {
  const [disabled, setDisabled] = useState(true);
  const stepTwo = props?.onChange("Two");

  const ageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    stepTwo("age", +event.target.value);
  };
  const heightHandler = (event: ChangeEvent<HTMLInputElement>) => {
    stepTwo("height", +event.target.value);
  };
  const weightHandler = (event: ChangeEvent<HTMLInputElement>) => {
    stepTwo("weight", +event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genderValue = event.target.value;
    stepTwo("gender", genderValue);
  };

  useEffect(() => {
    if(props?.data?.stepTwo?.age && props?.data?.stepTwo?.gender && props?.data?.stepTwo?.height && props?.data?.stepTwo?.weight) {
      setDisabled(false);
    }
  }, [props?.data?.stepTwo])

  return (
    <div className="w-full md:w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Tell us more about you...`}
      </h4>

      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Select your gender
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            className="hidden peer"
            required
            onChange={handleGenderChange}
          />
          <label
            htmlFor="male"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p>Male</p>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="32"
              width="32"
              {...props}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.189 7l.002-2 7 .007-.008 7-2-.002.004-3.588-3.044 3.044a5.002 5.002 0 01-7.679 6.336 5 5 0 016.25-7.736l3.058-3.057L12.189 7zm-4.31 5.14a3 3 0 114.242 4.244A3 3 0 017.88 12.14z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            className="hidden peer"
            onChange={handleGenderChange}
          />
          <label
            htmlFor="female"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p>Female</p>
            <svg fill="none" viewBox="0 0 24 24" height="32" width="32">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 3a5 5 0 00-1 9.9V15H8v2h3v4h2v-4h3v-2h-3v-2.1A5.002 5.002 0 0012 3zM9 8a3 3 0 106 0 3 3 0 00-6 0z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </li>
      </ul>

      <AgeRangeInput
        min={16}
        max={100}
        value={props?.data?.stepTwo?.age}
        label={"Age"}
        onChange={ageHandler}
      />
      <AgeRangeInput
        min={50}
        max={300}
        value={props?.data?.stepTwo?.height}
        label={"Height (in cms)"}
        onChange={heightHandler}
      />
      <AgeRangeInput
        min={30}
        max={150}
        value={props?.data?.stepTwo?.weight}
        label={"Weight (in Kgs)"}
        onChange={weightHandler}
      />

      <div className="w-full md:flex">
        <button
          onClick={props?.prevStep}
          type="button"
          className="md:flex-1 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Previous
        </button>

        <button
          onClick={props?.nextStep}
          type="button"
          disabled={disabled}
          className="disabled:bg-gray-500 disabled:hover:bg-gray-500 md:flex-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoreAboutYou;
