'use client';
import React, { useState } from 'react';
import SubStepper from '@/components/sub-stepper';
import ImageUpload from '@/components/Image-upload'; // Adjust the path based on your project structure

const Page: React.FC = () => {
  const [stepArray, setStepArray] = useState<string[]>([
    'Upload Logistics Data',
    'Preview Data',
    'Add Images',
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [image, setImage] = useState<string | null>(null);

  // Function to handle image upload
  const handleImageChange = (file: File | null) => {
    if (file) {
      setImage(URL.createObjectURL(file)); // Set the uploaded image preview
    } else {
      setImage(null); // Reset the image if null
    }
  };

  return (
    <div className="h-[calc(100vh-68px)] bg-white mx-5 flex flex-col pt-3">
      <SubStepper 
        stepArray={stepArray} 
        activeStep={activeStep} 
        setActiveStep={setActiveStep}
      >
        <ImageUpload
          value={image} // Pass the current image URL or null
          onChange={handleImageChange} // Handle image selection
          disable={false} // Enable the upload functionality
        />
      </SubStepper>
    </div>
  );
};

export default Page;
