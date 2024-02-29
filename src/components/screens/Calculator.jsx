import * as React from 'react';
import MainForm from '../calculator/Main';
import { useTranslation } from 'react-i18next';
import Advertisement from '../calculator/Advertisement';
import MainLayout from '../layouts/MainLayout';

function CalculatorForm() {
  const { t } = useTranslation();
  return (
    <>
      <div className="my-10 border-2 border-white rounded-lg p-4 md:flex">
      <div className="md:w-1/2 w-full mb-4 md:mb-0">
        <Advertisement />
      </div>
      
      <div className="md:w-1/2 w-full">
        <MainForm />
      </div>
      </div>
    </>
  );
}

export default CalculatorForm;
