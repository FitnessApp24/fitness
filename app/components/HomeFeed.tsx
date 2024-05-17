import React, { useContext, useEffect, useState } from "react";
import { MealFields, Tabs } from "./types";
import { ConsumedFoodsContext } from "./Context";
import addData from "@/app/firebase/db/addData";
import getData from "@/app/firebase/db/getData";
import { calcBmi } from "../utils/bmi";
import MyCalories from "./MyCalories";
import { calculateMaintenanceCalories } from "../utils/caloriesCalc";

type HomeProps = {
    updateToTrackingTab: (tab: Tabs) => void;
}

let callInProgress = false;
let initialCallHappened = false;

const HomeFeed = (props: HomeProps) => {
    const [nutritionNumbers, setNutritionNumbers] = useState({
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0
    });
    const [loader, setLoader] = useState<boolean>(true)
    const { consumedFoods, dispatch } = useContext(ConsumedFoodsContext);
    const [bmi, setBmi] = useState({});
    const [maintenanceCalories, setMaintenanceCalories] = useState<number>(0);
    const [goal, setGoal] = useState('');


    const parseResult = (data: any) => {
        let calories = 0;
        let protein = 0;
        let fats = 0;
        let carbs = 0;
        data?.forEach((item: any) => {
            calories += item?.calories || 0;
            protein += item?.protein_g || 0;
            fats += item?.fat_total_g || 0;
            carbs += item?.carbohydrates_total_g || 0;
        });
        setNutritionNumbers({
            calories: +calories.toFixed(2),
            protein: +protein.toFixed(2),
            carbs: +carbs.toFixed(2),
            fats: +fats.toFixed(2)
        });
        const id = sessionStorage.getItem("sessionId");
        if (id) {
            const dbData = {
                calories,
                carbohydrates: carbs,
                fats,
                protein,
                ...consumedFoods
            }
            addData("userTracker", JSON.parse(id), dbData);
        }
    }

    useEffect(() => {
        if (consumedFoods.breakfast.length === 0 && consumedFoods.lunch.length === 0 && consumedFoods.dinner.length === 0) {
            return;
        };
        if (callInProgress) return;
        let query = '';
        Object.keys(consumedFoods).forEach((key) => {
            query += consumedFoods[key].join(' ') + ' ';
        });
        query = query.trim();
        if (!query || query === '') {
            setLoader(false);
            return;
        };
        callInProgress = true;
        fetch('https://api.api-ninjas.com/v1/nutrition?query=' + query, {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.NUTRITION_KEY,
                'Content-Type': 'application/json'
            } as any
        })
            .then(response => response.json())
            .then(result => {
                callInProgress = false;
                parseResult(result);
                setLoader(false);
            })
            .catch(error => {
                callInProgress = false;
                console.error('Error:', error);
                setLoader(false);
            });
    }, [consumedFoods]);

    // useEffect(() => {
    //     fetch('/api/fitnessfedd').then(res => res.json()).then(data => console.log(data))
    // },[]);

    useEffect(() => {
        const id = sessionStorage.getItem("sessionId");
        (async () => {
            if (initialCallHappened) return;
            if (id) {
                setLoader(true);
                initialCallHappened = true;
                const { result, error } = await getData('userTracker', JSON.parse(id));
                if (error || !result) {
                    console.log(error);
                    setLoader(false);
                } else {
                    setNutritionNumbers({
                        calories: +result?.calories.toFixed(2) || 0,
                        protein: +result?.protein.toFixed(2) || 0,
                        carbs: +result?.carbohydrates.toFixed(2) || 0,
                        fats: +result?.fats.toFixed(2) || 0,
                    })
                    const mealsState = {
                        [MealFields.Breakfast]: result?.breakfast || [],
                        [MealFields.Lunch]: result?.lunch || [],
                        [MealFields.Dinner]: result?.dinner || []
                    }
                    dispatch({ type: 'add', payload: mealsState });
                }
            }
        })();

      calculateCalories(id);
      setLoader(false);
    }, [])

    const calculateCalories = async (id: any) => {
        const data = await getData('userOnboarding', id);
        const height = data?.result?.stepTwo?.height / 100;
        const weight = data?.result?.stepTwo?.weight;
        const age = data?.result?.stepTwo?.age;
        const activityLevel = data?.result?.stepFive?.activity;
        const gender = data?.result?.stepTwo?.gender;
        const goal = data?.result?.stepThree?.objective;

         const _bmi = calcBmi(weight, height);
        setBmi(_bmi);
        const maintenanceCalories = calculateMaintenanceCalories(gender, weight, height, age, activityLevel) ?? 0;
        setMaintenanceCalories(maintenanceCalories);
        setGoal(goal)
    }

    return (
        <div className="homefeed">
            <section className="homefeed__todayanalysis dark:bg-gray-800 my-8 p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Your Calorie Intake Today
                </h1>
                <br />
                {loader ? <div role="status" className="w-full animate-pulse">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
                    <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div> :
                    <div className="flex flex-wrap gap-5">
                        <div className="flex">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                Calories: &nbsp;
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {nutritionNumbers.calories}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-white">
                                cal
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                Protein: &nbsp;
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {nutritionNumbers.protein}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-white">
                                g
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                Carbohydrates: &nbsp;
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {nutritionNumbers.carbs}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-white">
                                g
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                Fats: &nbsp;
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {nutritionNumbers.fats}
                            </p>
                            <p className="text-sm text-gray-900 dark:text-white">
                                g
                            </p>
                        </div>

                    </div>
                }
                <br />
                <br />
                <div>
                    <h2 className="font-bold">Foods Consumed Today</h2>
                    <br />
                    {loader ? <div role="status" className="w-full animate-pulse">
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
                        <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    </div> :
                        <div className="flex flex-row w-full gap-5 justify-between">
                            <section>
                                <h3 className="font-bold mb-4 underline">Breakfast</h3>
                                <ul>
                                    {consumedFoods.breakfast.map((food: string, index: number) => (
                                        <li className="" key={index}>{food}</li>
                                    ))}
                                </ul>
                            </section>
                            <section>
                                <h3 className="font-bold mb-4 underline">Lunch</h3>
                                <ul>
                                    {consumedFoods.lunch.map((food: string, index: number) => (
                                        <li className="" key={index}>{food}</li>
                                    ))}
                                </ul>
                            </section>
                            <section>
                                <h3 className="font-bold mb-4 underline">Dinner</h3>
                                <ul>
                                    {consumedFoods.dinner.map((food: string, index: number) => (
                                        <li className="" key={index}>{food}</li>
                                    ))}
                                </ul>
                            </section>

                        </div>
                    }

                </div>
            </section>
            <section className="homefeed__track flex">
                <button
                    className={`mx-auto my-8 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    type="button"
                    onClick={() => props.updateToTrackingTab(Tabs.Tracking)}
                >
                    Add Items
                </button>
            </section>
            <section className="">
                <h1>Fitness News</h1>
                {/* @ts-ignore */}
                <rssapp-magazine id="thC3Ls4LDXT4RkmT"/>
            </section>

            <section className="mt-8" id="bmi">
                <MyCalories bmi={bmi} maintenanceCalories={maintenanceCalories} goal={goal} todayIntakeCalories={nutritionNumbers?.calories}/>
            </section>
        </div>
    )
}

export default HomeFeed;