"use client";

import { useState } from "react";

import * as ICONS from "../utils/IconSvg";

import AboutYou from "./StepComponents/AboutYou";
import MoreAboutYou from "./StepComponents/MoreAboutYou";
import Goal from "./StepComponents/Goal";
import NutritionalPreferences from "./StepComponents/NutritionalPreferences";
import ActivityLevel from "./StepComponents/ActivityLevel";
import ExperienceLevel from "./StepComponents/ExperienceLevel";

const steps = [
  { name: "About you", id: 1, iconSvg: ICONS.USER_CIRCLE },
  { name: "More about you", id: 2, iconSvg: ICONS.STAR },
  { name: "Goal", id: 3, iconSvg: ICONS.BEAKER },
  { name: "Nutritional Preferences", id: 4, iconSvg: ICONS.FORWARD },
  { name: "Activity level", id: 5, iconSvg: ICONS.NEWSPAPER },
  { name: "Experience level", id: 6, iconSvg: ICONS.BOLT },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

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

  // Define components for each step
  const stepComponents = [
    <AboutYou key={1} nextStep={handleNext} />,
    <MoreAboutYou key={2} nextStep={handleNext} prevStep={handlePrev} />,
    <Goal key={3} nextStep={handleNext} prevStep={handlePrev} />,
    <NutritionalPreferences key={4} nextStep={handleNext} prevStep={handlePrev} />,
    <ActivityLevel key={5} nextStep={handleNext} prevStep={handlePrev} />,
    <ExperienceLevel key={6} nextStep={handleNext} prevStep={handlePrev} />,
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
