import React from 'react'
import AgeRangeInput from '../AgeRangeInput';

interface ExperienceLevelProps {
    nextStep: () => void;
    prevStep: () => void;
}

const ExperienceLevel = (props: ExperienceLevelProps) => {
  return (
    <div className="w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
    <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
      {`What's your experience level ?`}
    </h6>
    <AgeRangeInput max={30} min={0} initialValue={2} label="Experience" />

    <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
      {`Facility Options`}
    </h6>
    <ul className="w-full">
      {["Home setup", "Gym"].map((item) => (
        <li className="space-y-3" key={item}>
          <input
            type="radio"
            id={item}
            name="facility-options"
            value={item}
            className="hidden peer"
          />
          <label
            htmlFor={item}
            className="inline-flex items-start justify-center space-x-2 w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {item === "Home setup" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>
            )}

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
        className="md:flex-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
  )
}

export default ExperienceLevel