import * as React from 'react';
import { useTranslation } from 'react-i18next';
import DetailResults from './DetailResults';


const Results = ({ results }) => {
  // const keys = Object.keys(results.fees);

  const { t, i18n } = useTranslation();
  const [password, setPassword] = React.useState('');
  const [showWarning, setShowWarning] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  
  const checkPass = (e) => {
    e.preventDefault();

    // Проверка пароля
    if (password !== '030715') {
      setShowWarning(true);
      return;
    } else {
      setShowWarning(false)
      setDetail(true)
    }
  }

  return <>

    {!detail && 
    <div>
      <label htmlFor="type-of-mark" className="block mb-2">{t('result.password.label')}</label>
      <form onSubmit={checkPass}>
    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <input
          type="password"
          style={{
            background: 'none', // Убираем фон
            border: 'none', // Убираем границы
            color: 'white', // Цвет текста
            fontSize: '16px', // Размер шрифта
            outline: 'none', // Убираем обводку при фокусе
          }}
        placeholder={t('result.password.placeholder')}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
      <button className="w-full bg-blue-600 p-3 rounded mt-4">{ t('result.password.button') }</button>
    </form>
    {showWarning && <p style={{ color: 'red' }} className='mt-2 mb-2'>{t('result.password.warning')}</p>}
    </div>
    }
    

    {detail && <DetailResults results={results} />}

    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span>{ t("result.modal.res") }</span>
      <div className="flex items-center">
        <div>{Math.round(results.summa).toLocaleString()} ₸</div>
      </div>
    </div>

    
    
    



  </>
}

export default Results;


