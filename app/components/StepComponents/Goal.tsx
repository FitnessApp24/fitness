import React from 'react'

interface GoalProps {
    nextStep: () => void;
    prevStep: () => void;
}

const Goal = (props: GoalProps) => {
  return (
    <div className="w-1/2 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3">
      <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`What brings your here ?`}
      </h6>
        


<ul className="w-full flex flex-col gap-4">
    <li>
        <input type="radio" id="lose-fat" name="goal" value="lose-fat" className="hidden peer" required />
        <label htmlFor="lose-fat" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">Lose Fat</div>
                <div className="w-full">I want to be slimmer</div>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="gain-muscle" name="goal" value="gain-muscle" className="hidden peer" />
        <label htmlFor="gain-muscle" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Gain Muscle</div>
                <div className="w-full">I want to hit more performance numbers</div>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="maintain-weight" name="goal" value="maintain-weight" className="hidden peer" />
        <label htmlFor="maintain-weight" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Maintain Weight</div>
                <div className="w-full">I like my current body and maintain it</div>
            </div>
        </label>
    </li>
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
          Next
        </button>
      </div>
    </div>
  )
}

export default Goal