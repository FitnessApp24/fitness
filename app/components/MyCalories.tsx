import React from 'react'

const MyCalories = (props: {bmi?: {name?: string, value?: number}, maintenanceCalories?: number, goal?: string, todayIntakeCalories?: number}) => {
    const finalCalories = props?.goal === 'Gain Muscle' ? props?.maintenanceCalories + 500 : props?.goal === 'Lose Fat' ? props?.maintenanceCalories - 500 : props?.maintenanceCalories;
  const caloriesDiff = props?.maintenanceCalories - props?.todayIntakeCalories;
  const avg = ((props?.todayIntakeCalories / props?.maintenanceCalories) * 100)?.toFixed(0);
    return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1  mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5">{props?.bmi?.name}</span>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your calculated BMI - {props?.bmi?.value?.toFixed(1)}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">BMI is a screening tool that can help identify possible weight problems in adults. However, it's important to remember that BMI is just one factor among many when it comes to assessing health.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Recommended Daily Calorie Intake to {props?.goal}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Based on your preferences and information provided, your daily calorie intake to maintain your current weight should be <b>{finalCalories} kcal/day.</b> </p>
        <div className="mb-1 text-base font-medium dark:text-white pb-3">Keeping Count: Your Daily Calorie Intake Snapshot</div>
<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div className={`bg-blue-600 h-2.5 rounded-full dark:bg-blue-500`} style={{width: avg < 100 ? `${avg}%` : '100%'}}></div>
  <p className={`text-xl font-extrabold p-3 ${caloriesDiff < 0 ? 'text-red-800': ''}`}> {props?.todayIntakeCalories} / {props?.maintenanceCalories} kcal/d</p>
{caloriesDiff && <><p className='p-3 text-2xl font-extrabold inline-block'>{`Oops! You've Exceeded Your Daily Calorie Intake by `}</p><span className='font-extrabold text-red-800 text-2xl'>{caloriesDiff?.toFixed(1)}</span> kcal</>}
</div>

   
    </div>
</section>
  )
}

export default MyCalories