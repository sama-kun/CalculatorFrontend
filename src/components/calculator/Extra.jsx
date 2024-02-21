import SelectUI from '../UI/select/Select';
import CountrySelect from '../UI/select/CountrySelect';
import { useTranslation } from 'react-i18next';

const ExtraForm = ({ register, control }) => {
  const { t } = useTranslation();
  return <>
    <div className="mt-4">
      <label htmlFor="classes" className="block mb-2">{ t('form.classMark') }</label>
            <SelectUI
              id='classes'
              className="w-full bg-gray-700 p-3 px-3 text-lg rounded-xl"
              options={Array.from({ length: 45 }, (_, index) => ({
                value: index + 1,
                title: `${index + 1}`,
                styles: {}
              }))}
              {...register("classMark")}
            />
    </div>

    <div className='mt-4'>
      <label htmlFor="designations" className="block mb-2">{t('form.country.label')}</label>

      <CountrySelect control={control} />
      
    </div>
    </>
    
}

export default ExtraForm