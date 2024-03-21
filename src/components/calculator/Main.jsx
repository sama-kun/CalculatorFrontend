import * as React from 'react';
import SelectUI from '../UI/select/Select';
import ExtraForm from './Extra';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Results from './Results';
import axiosInstance from '../../service/instanceAxios';
import CircularProgress from '@mui/material/CircularProgress';


const MainForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, setValue, control, watch } = useForm();
  const selectedOption = watch("typeOfMark");
  const [serverResponse, setServerResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSelectChange = (event) => {
    setValue("typeOfMark", event.target.value);
  };

  const onSubmit = async (data) => {
    setLoading(true); // Установка состояния загрузки в true при отправке запроса
    try {
      let response = {};
      console.log(data);
      // if (data.typeOfMark) {
        response = await axiosInstance.post('/calculator/test', data);
      // } else response = await axiosInstance.post('/calculator', data);
      // console.log(response.data)
      setServerResponse(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Обработка ошибки при отправке запроса
    } finally {
      setLoading(false); // Установка состояния загрузки в false после получения ответа или ошибки
    }
  };

  const options = [
    { value: '', title: t('form.type.options.default'), styles: {} },
    { value: 'new', title: t('form.type.options.new'), styles: {} },
    { value: 'distribution', title: t('form.type.options.distribution'), styles: {} },
    { value: 'renewal', title: t('form.type.options.renewal'), styles: {} }
  ];


  return (
    <>
      {loading && (
        <div className="loader-container">
          <CircularProgress size={100} /> {/* Используйте CircularProgress из Material-UI */}
        </div>
      )}
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
        <button className="w-full bg-blue-600 p-3 rounded mt-4" onClick={onSubmit}>{t('form.button')}</button>
    </form>
      {serverResponse && <Results results={serverResponse} />}
    </>
  );
}

export default MainForm;
