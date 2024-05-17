import React, { useEffect, useState } from "react";
import AgeRangeInput from "../AgeRangeInput";
import { initialValue } from "../Stepper";

interface NutritionalPreferencesProps {
  nextStep: () => void;
  prevStep: () => void;
  data: typeof initialValue;
  onChange?: any;
}

const NutritionalPreferences = (props: NutritionalPreferencesProps) => {
  const stepFour = props?.onChange("Four");
  const [disabled, setDisabled] = useState(true);
  const mealsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stepFour("mealsPerDay", e?.currentTarget?.value);
  };
  const snacksHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stepFour("snacksPerDay", e?.currentTarget?.value);
  };
  const foodPreferenceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stepFour("foodPreferences", e?.currentTarget?.value);
  };
  const allergiesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;
    let newAllergies: any = [...props?.data?.stepFour?.allergies];
    if (checked) {
      newAllergies.push(value);
    } else {
      newAllergies = newAllergies.filter((allergy: any) => allergy !== value);
    }
    stepFour("allergies", newAllergies);
  };
  
  useEffect(() => {
    if (
      props?.data?.stepFour?.allergies?.length > 0 &&
      props?.data?.stepFour?.foodPreferences &&
      props?.data?.stepFour?.mealsPerDay &&
      props?.data?.stepFour?.snacksPerDay
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [props?.data?.stepFour]);

  return (
    <div className="w-full md:w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <AgeRangeInput
        min={0}
        max={10}
        value={props?.data?.stepFour?.mealsPerDay}
        label="How many full meals you eat in a day ?"
        onChange={mealsHandler}
      />

      <AgeRangeInput
        min={0}
        max={10}
        value={props?.data?.stepFour?.snacksPerDay}
        label="How many times do you eat snacks in a day ?"
        onChange={snacksHandler}
      />

      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`Food Preferences`}
      </h6>

      <ul className="w-full">
        {[
          "No Preferences",
          "Vegeterian",
          "Non-Vegeterian",
          "Vegan",
          "Pescaterian",
        ].map((item) => (
          <li className="space-y-3" key={item}>
            <input
              type="radio"
              id={item}
              name="diet"
              value={item}
              className="hidden peer"
              onChange={foodPreferenceHandler}
            />
            <label
              htmlFor={item}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-md font-semibold">{item}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>

      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`Do you have any food allergies ?`}
      </h6>

      {["Egg", "Peanut", "Milk", "Soy", "Wheat", "None of the above"].map(
        (item) => (
          <React.Fragment key={item}>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value={item}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={allergiesHandler}
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item}
              </label>
            </div>
          </React.Fragment>
        )
      )}
      <div className="w-full md:flex pt-3">
        <button
          onClick={props?.prevStep}
          type="button"
          className="md:flex-1 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Previous
        </button>

        <button
          onClick={props?.nextStep}
          disabled={disabled}
          type="button"
          className="disabled:bg-gray-500 disabled:hover:bg-gray-500 md:flex-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NutritionalPreferences;
