import React from "react";
import AgeRangeInput from "../AgeRangeInput";

interface ActivityLevelProps {
  nextStep: () => void;
  prevStep: () => void;
}

const ActivityLevel = (props: ActivityLevelProps) => {
  return (
    <div className="w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {`List of equipment you have ?`}
      </h6>
      {["Home gym", "Body weights", "Band", "Free weights", "Commercial gym"].map((item) => (
        <React.Fragment key={item}>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
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
          className="md:flex-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ActivityLevel;
