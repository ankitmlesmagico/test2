'use client';
import ProgressStepper from '@/components/stepper';
import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    { title: 'Contract & Contact Form', id: 0 },
    { title: 'Logistics Form', id: 1 },
    { title: 'Add Product URLs', id: 2 },
    { title: 'Compliance Form', id: 3 },
  ];
  return (
    <ProgressStepper
      activeStep={currentStep}
      setActiveStep={setCurrentStep}
      steps={steps}
    >
      <div className="bg-white h-[500px] rounded-md border border-[#E4E4F0] mx-4 p-3"></div>
    </ProgressStepper>
  );
};

export default Stepper;
