import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../service/instanceAxios';
import WordResults from '../synonymizer/WordResults';


const Synonymizer = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState(null);


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы (перезагрузка страницы)

    setLoading(true);
    
    try {
      const response = await axiosInstance.get('/synonymizer/'+searchTerm);
      setResults(response.data)
      // Обработка полученных данных с сервера, если необходимо
    } catch (error) {
      console.error('Error submitting form:', error);
      // Обработка ошибки при отправке запроса
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loader-container">
          <CircularProgress size={100} />
        </div>
      )}
      <div className="flex justify-center">
        <div className="p-4 my-10 border-2 border-white rounded-lg flex-row sm:w-full sm:p-5 w-full md:w-2/3">
          <form onSubmit={handleSubmit} className='w-full'>
            <TextField
              label="Поиск"
              variant="outlined"
              value={searchTerm}
              onChange={handleChange}
              className='w-full'
              name='word'
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primaru',
                  },
                },
                '& .MuiFormLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit" edge="end">
                    <SearchIcon sx={{color: 'white'}} />
                  </IconButton>
                ),
              }}
            />
          </form>
          <br />
          <div className='w-full'>
            {results && <WordResults results={results} setLoading={ setLoading }/>}
            {/* <WordResults results={results}/> */}
            
          </div>
        </div>
      </div>
    </>
  );
}


export default Synonymizer;
