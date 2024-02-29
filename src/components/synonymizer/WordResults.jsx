import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import axiosInstance from '../../service/instanceAxios';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function WordResults({results, setLoading}) {
  const { t } = useTranslation();

  
  const handleGeneratePdf = async() => {
    try {
      setLoading(true);
      const response = await axiosInstance.post('/synonymizer/pdfreport', results, {
        responseType: 'blob' // Установите responseType как 'blob' для получения файла в виде Blob
      });
      
      // Создайте ссылку для скачивания файла
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', results.word+'.pdf'); // Установите имя файла для скачивания
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Ошибка при запросе на генерацию PDF файла:', error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Button
      variant="contained"
      color="primary"
      startIcon={<PictureAsPdfIcon />}
      onClick={handleGeneratePdf}
    >
      Сгенерировать PDF
    </Button>
      
        <div className="flex items-center flex-row bg-gray-700 p-3 rounded mb-2 my-4">
        <div>
          <div className="mb-4">
            <h2 className="mr-4">{results.word}</h2> {/* Заголовок */}
          </div>
          {results?.wipo.map((value, index) => {
            return <>
              <div className="ml-4">
                <p className="text-white">Класс {value.cls}:</p>
                {value.text.map((word, index) => {
                  return <p className="text-white ml-4">{ word.charAt(0).toUpperCase() + word.slice(1) }.</p>
                })}
              </div>
              <br/>
              </>
      })}
        </div>
      </div>
      
      <div className="flex items-center flex-row bg-gray-700 p-3 rounded mb-2 my-4">
        <div>
          <div className="mb-4">
            <h2 className="mr-4">Синонимы:</h2> {/* Заголовок */}
          </div>
          <div className="flex flex-wrap">
          {results?.synonyms.map((value, index) => {
            return <>
                <span key={index} className="inline-block m-1 p-2 bg-gray-800 rounded-full">
          {value}
        </span>
              </>
          })}
            </div>
        </div>
        </div>



    </>
  );
}

export default WordResults;
