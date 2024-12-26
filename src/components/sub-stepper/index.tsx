'use client';
import React from 'react';

interface SubStepperProps {
  stepArray: string[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  children?: React.ReactNode;
}

const SubStepper: React.FC<SubStepperProps> = ({
  stepArray,
  activeStep,
  setActiveStep,
  children,
}) => {
  return (
    <div className="border px-4 py-6 rounded-lg mx-5">
      <div className="w-full flex gap-4 border-b">
        {stepArray.map((step, index) => (
          <button
            key={index}
            className={`h-11 px-4 py-2 font-lato text-sm font-medium ${activeStep === index ? 'text-[#0168B4] border-b-2 border-[#0168B4]' : 'text-[#858D98] border-b-2 border-transparent'}`}
            onClick={() => setActiveStep(index)}
          >
            {step}
          </button>
        ))}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default SubStepper;
