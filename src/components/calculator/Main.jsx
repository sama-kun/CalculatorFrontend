import * as React from 'react';
import SelectUI from '../UI/select/Select';
import ExtraForm from './Extra';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

const MainForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, control, watch } = useForm();
  const selectedOption = watch("typeOfMark");

  const handleSelectChange = (event) => {
    setValue("typeOfMark", event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data); // Here you would handle form submission data
  };

  const options = [
    { value: '', title: t('form.type.options.default'), styles: {} },
    { value: 'new', title: t('form.type.options.new'), styles: {} },
    { value: 'additional_countries', title: t('form.type.options.additional_countries'), styles: {} },
    { value: 'extension', title: t('form.type.options.extension'), styles: {} }
  ];

  return (
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-semibold">{t('title')}</h2>
      <div className="mt-4">
        <label htmlFor="type-of-mark" className="block mb-2">{t('form.type.label')}</label>
        <SelectUI
          id="type-of-mark"
          className="w-full bg-gray-700 p-3 px-3 text-lg rounded-xl"
          options={options}
          value={selectedOption}
          onChange={handleSelectChange}
          {...register("typeOfMark")}
        />
      </div>
      {selectedOption && selectedOption !== '' && (
        <ExtraForm register={register} control={control} />
      )}
      <button className="w-full bg-blue-600 p-3 rounded mt-4">{t('form.button')}</button>
    </form>
  );
}

export default MainForm;
