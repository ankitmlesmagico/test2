'use client';
import React from 'react';

interface Headings {
  id: number;
  title: string;
}
interface StepperProps {
  steps: Headings[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  children?: React.ReactNode;
}

const ProgressStepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  setActiveStep,
  children,
}) => {
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="w-auto relative" style={{ height: 'calc(100vh - 48px)' }}>
      {' '}
      {/* Stepper */}
      <div className="flex items-center mx-5 bg-white p-4">
        {steps.map((step, index) => (
          // <div key={step.id} className="flex items-center ">
          <React.Fragment key={index}>
            {/* Icon and Title Group */}
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center 
                  ${
                    index < activeStep
                      ? 'bg-[#35BB5F] text-white'
                      : index === activeStep
                        ? 'bg-[#0168B4] text-white'
                        : 'bg-white border-2 border-[#858D98] text-[#858D98]'
                  }`}
              >
                {index < activeStep ? (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>
              <span
                className={`ml-2  ${
                  index < activeStep
                    ? 'text-[#35BB5F]'
                    : index === activeStep
                      ? 'text-[#0168B4]'
                      : 'text-gray-500'
                } font-bold`}
              >
                {step.title}
              </span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-px">
                {/* <div className="mx-4 h-px w-40 sm:w-32 md:w-44 lg:w-40"> */}
                <div
                  className={`h-full ${
                    index < activeStep
                      ? 'bg-[#35BB5F]'
                      : index === activeStep
                        ? 'bg-[#0168B4]'
                        : 'bg-gray-300'
                  }`}
                />
              </div>
            )}
            {/* </div> */}
          </React.Fragment>
        ))}
      </div>
      {/* childer */}
      <div
        className="mx-5 bg-white overflow-y-auto"
        style={{ height: 'calc(100vh - 160px)', backgroundColor: 'white' }}
      >
        {children}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between bg-white px-10 py-5">
        <button
          onClick={handlePrevious}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-md ${
            activeStep === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#0168B4] text-white hover:bg-blue-600'
          }`}
          style={{
            fontSize: '13px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className={`px-4 py-2 rounded-md ${
            activeStep === steps.length - 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#0168B4] text-white hover:bg-blue-600'
          }`}
          style={{
            fontSize: '13px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default ProgressStepper;
