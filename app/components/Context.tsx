import React from "react";
import { MealFields, consumedFoodsContextType } from './types';

const defalutState: consumedFoodsContextType = {
    [MealFields.Breakfast]: [],
    [MealFields.Lunch]: [],
    [MealFields.Dinner]: []
}
export const ConsumedFoodsContext = React.createContext(defalutState);

const foodsReducer = (state: any, action: { type: string; payload: any; } ): consumedFoodsContextType => {
    if(action?.type === 'update') {
        const newState = {...state};
        Object.keys(action.payload).forEach((key) => {
            newState[key] = [...newState[key], action.payload[key]];
        })
        return newState;
      } else if(action?.type === 'add') {
        return {...action.payload};
      }
      else {
        return state;
      }
  }

export const ConsumedFoodsProvider = (props:any) => {
    const [consumedFoods, dispatch] = React.useReducer(foodsReducer,defalutState);

    

    return (
        <ConsumedFoodsContext.Provider value={{consumedFoods,dispatch}}>
            {props.children}
        </ConsumedFoodsContext.Provider>
    )
}