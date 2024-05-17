import React, { useEffect, useState } from "react";
import { initialValue } from "../Stepper";

interface ActivityLevelProps {
  nextStep: () => void;
  prevStep: () => void;
  data: typeof initialValue;
  onChange?: any;
}

const ActivityLevel = (props: ActivityLevelProps) => {
  const [disabled, setDisabled] = useState(false);
  const stepFive = props?.onChange("Five");

  useEffect(() => {
    if (
      props?.data?.stepFive?.equipments?.length > 0 &&
      props?.data?.stepFive?.activity
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [props?.data?.stepFive]);

  const equipmentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;
    let newEquipments: any = [...props?.data?.stepFive?.equipments];
    if (checked) {
      newEquipments.push(value);
    } else {
      newEquipments = newEquipments.filter((equipment: any) => equipment !== value);
    }
    stepFive("equipments", newEquipments);
  };
  const activityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    stepFive("activity", e?.currentTarget?.value);
  };

  return (
    <div className="w-full md:w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`List of equipment you have ?`}
      </h6>
      {[
        "Home gym",
        "Body weights",
        "Band",
        "Free weights",
        "Commercial gym",
      ].map((item) => (
        <React.Fragment key={item}>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value={item}
              onChange={equipmentHandler}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {item}
            </label>
          </div>
        </React.Fragment>
      ))}

      <h6 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`Food Preferences`}
      </h6>

      <ul className="w-full">
        {[
          "Sedentary",
          "Lightly Active",
          "Moderately Active",
          "Very Active",
          "Extra Active",
        ].map((item) => (
          <li className="space-y-3" key={item}>
            <input
              type="radio"
              id={item}
              name="activity"
              value={item}
              className="hidden peer"
              onChange={activityHandler}
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

export default ActivityLevel;
