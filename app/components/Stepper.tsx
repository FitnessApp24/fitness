"use client";

import { useState } from "react";

import * as ICONS from "../utils/IconSvg";

import AboutYou from "./StepComponents/AboutYou";
import MoreAboutYou from "./StepComponents/MoreAboutYou";
import Goal from "./StepComponents/Goal";
import NutritionalPreferences from "./StepComponents/NutritionalPreferences";
import ActivityLevel from "./StepComponents/ActivityLevel";
import ExperienceLevel from "./StepComponents/ExperienceLevel";
import addData from "../firebase/db/addData";
import { useAuthContext } from "@/context/AuthContext";

const steps = [
  { name: "About you", id: 1, iconSvg: ICONS.USER_CIRCLE },
  { name: "More about you", id: 2, iconSvg: ICONS.STAR },
  { name: "Goal", id: 3, iconSvg: ICONS.BEAKER },
  { name: "Nutritional Preferences", id: 4, iconSvg: ICONS.FORWARD },
  { name: "Activity level", id: 5, iconSvg: ICONS.NEWSPAPER },
  { name: "Experience level", id: 6, iconSvg: ICONS.BOLT },
];

export const initialValue = {
  stepOne: {
    name: "",
    picture: "",
  },
  stepTwo: {
    age: 0,
    gender: "",
    height: 0,
    weight: 0,
  },
  stepThree: {
    objective: "",
  },
  stepFour: {
    foodPreferences: "",
    allergies: [],
    mealsPerDay: "",
    snacksPerDay: "",
  },
  stepFive: {
    equipments: [],
    activity: "",
  },
  stepSix: {
    experience: 0,
    gym: ""
  },
};

const Stepper = () => {
  const [onboardData, setOnboardData] = useState(initialValue);

  const [currentStep, setCurrentStep] = useState(1);
  const user: any = useAuthContext()

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleForm = async () => {
    const id = user?.user;

    if (id) {
      const { result, error } = await addData(
        "userOnboarding",
        id,
        onboardData
      );

      if (error) {
        return console.log(error);
      }
      window.location.href = '/home';
      return;
    }
  };

  const handleStepChange =
    (stepNumber: any) => (name: string, value: string | number) => {
      setOnboardData((prevData) => ({
        ...prevData,
        [`step${stepNumber}`]: {
          ...prevData[`step${stepNumber}`],
          [name]: value,
        },
      }));
    };

  // Define components for each step
  const stepComponents = [
    <AboutYou
      key={1}
      nextStep={handleNext}
      data={onboardData}
      onChange={handleStepChange}
    />,
    <MoreAboutYou
      key={2}
      nextStep={handleNext}
      prevStep={handlePrev}
      data={onboardData}
      onChange={handleStepChange}
    />,
    <Goal
      key={3}
      nextStep={handleNext}
      prevStep={handlePrev}
      data={onboardData}
      onChange={handleStepChange}
    />,
    <NutritionalPreferences
      key={4}
      nextStep={handleNext}
      prevStep={handlePrev}
      data={onboardData}
      onChange={handleStepChange}
    />,
    <ActivityLevel
      key={5}
      nextStep={handleNext}
      prevStep={handlePrev}
      data={onboardData}
      onChange={handleStepChange}
    />,
    <ExperienceLevel
      key={6}
      nextStep={handleForm}
      prevStep={handlePrev}
      data={onboardData}
      onChange={handleStepChange}
    />,
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-2">
      <div className="flex w-full justify-between">
        {steps?.map((step) => (
          <div
            key={step?.id}
            className={`flex items-center justify-center w-1/6 h-12 transition-colors ${
              step?.id <= currentStep
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-white"
            }`}
          >
            <div
              className="w-[32px] h-[32px]"
              dangerouslySetInnerHTML={{ __html: step?.iconSvg ?? step?.name }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="text-xl font-semibold">Step {currentStep}</div>
      </div>
      <div className="transition-opacity duration-1000 w-full flex items-center justify-center">
        {stepComponents[currentStep - 1]}
      </div>
    </div>
  );
};

export default Stepper;
