import * as React from 'react';
import MainForm from './calculator/Main';
import { useTranslation } from 'react-i18next';
import Advertisement from './Advertisement';

function CalculatorForm() {
  const { t } = useTranslation();
  return (
    <div className="text-white font-inter">
      <div className="mx-auto" style={{ width: '90%' }}>
        <div className="my-10 border-2 border-white rounded-lg p-4 md:flex">

          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <Advertisement />
          </div>
          
          <div className="md:w-1/2 w-full">
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
