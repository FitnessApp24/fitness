import React, { useContext, useState } from "react";
import { MealFields, Tabs, consumedFoodsContextType } from "./types";
import { ConsumedFoodsContext } from "./Context";

type TrackingProps = {
    updateToHomeFeed: (tab:Tabs) => void;

}
const Tracking =(props:TrackingProps) => {

    const [mealsState , setMealsState] = useState<consumedFoodsContextType>({
        [MealFields.Breakfast]: '',
        [MealFields.Lunch]: '',
        [MealFields.Dinner]: ''
    });

    const {dispatch} = useContext(ConsumedFoodsContext);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setMealsState((prevState:consumedFoodsContextType) => ({
            ...prevState,
            [field]: e.target.value
        }));
    }
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({type: 'update', payload: mealsState});
        props.updateToHomeFeed(Tabs.Feed);
    };

    return (
        <div className="tracking-section dark:bg-gray-800 my-8">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add Items Consumed
                </h1>
                <form className="space-y-4 md:space-y-6 flex flex-col" action="#">
                    
                    <div className="grid gap-4 mb-4 grid-cols-1">
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor={MealFields.Breakfast} className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Breakfast</label>
                            <input type="text" name={MealFields.Breakfast} id={MealFields.Breakfast} 
                            onChange={(e) => handleInput(e,MealFields.Breakfast)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Avocado Toast" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="lunch" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Lunch</label>
                            <input type="text" name="lunch" id="lunch" 
                            onChange={(e) => handleInput(e,MealFields.Lunch)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="hotdogs with mustard" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="dinner" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Dinner</label>
                            <input type="text" name="dinner" id="dinner" 
                            onChange={(e) => handleInput(e,MealFields.Dinner)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="fried chicken, chicken fried steak" />
                        </div>   
                    </div>
                   
                    <button type="submit" className="mx-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => handleSubmit(e)}
                    >Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Tracking;