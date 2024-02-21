import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import ResultsModal from './modals/Results';
import BasicModal from './modals/Basic';
import CompanyModal from './modals/Company';
import BankModal from './modals/Bank';
import FeeModal from './modals/Fees';

const Results = ({ results }) => {
  // const keys = Object.keys(results.fees);
  const [openBasic, setOpenBasic] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openBank, setOpenBank] = React.useState(false);

  const [open, setOpen] = React.useState(new Array(results.fees.length).fill(false)); // Создаем массив состояний для каждого модального окна

const handleOpen = (index) => {
  const newOpenState = [...open]; // Создаем копию массива состояний
  newOpenState[index] = true; // Устанавливаем состояние открытия модального окна с указанным индексом в true
  setOpen(newOpenState); // Устанавливаем новое состояние для всех модальных окон
};

const handleClose = (index) => {
  const newOpenState = [...open]; // Создаем копию массива состояний
  newOpenState[index] = false; // Устанавливаем состояние открытия модального окна с указанным индексом в false
  setOpen(newOpenState); // Устанавливаем новое состояние для всех модальных окон
};

  const { t, i18n } = useTranslation();

  const handleOpenBasic = () => {
    setOpenBasic(true);
  };

  const handleCloseBasic = () => {
    setOpenBasic(false);
  };



  const handleOpenCompany = () => {
    setOpenCompany(true);
  };

  const handleCloseCompany = () => {
    setOpenCompany(false);
  };


  const handleOpenBank = () => {
    setOpenBank(true);
  };

  const handleCloseBank = () => {
    setOpenBank(false);
  };

  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch('/countries.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('sfssjkfbsfbjkv')
        setCountries(data["countries_"+i18n.language])
        console.log(data["countries_"+i18n.language])
        })
      .catch((error) => console.error("There has been a problem with your fetch operation:", error));
  }, []);


  const findCountryByCode =(code) => {
    const res = countries.find(country => country.code === code);
    console.log(code , res);
    return `${res.name} (${res.code})`
  }
  
  const counts = results.fees;

  return <>
    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span>{ t("result.basic") }</span>
      <div className="flex items-center">
        <BasicModal open={openBasic} handleClose={handleCloseBasic} basic={results.basic}/>
        <div>{results.basic} ₸</div>
        <Tooltip title="Info">
          <IconButton onClick={handleOpenBasic}>
            <InfoIcon style={{color: 'white'}} />
          </IconButton>
        </Tooltip>
      </div>
    </div>

    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span>{ t("result.company") }</span>
      <div className="flex items-center">
        <CompanyModal open={openCompany} handleClose={handleCloseCompany} company={results.company}/>
        <div>{parseFloat(results.company?.sum)} ₸</div>
        <Tooltip title="Info">
          <IconButton onClick={handleOpenCompany}>
            <InfoIcon style={{color: 'white'}} />
          </IconButton>
        </Tooltip>
      </div>
    </div>

    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span>{ t("result.bank") }</span>
      <div className="flex items-center">
        <BankModal open={openBank} handleClose={handleCloseBank} bank={ parseFloat(results.bank) } />
        <div>{parseFloat(results.bank)} ₸</div>
        <Tooltip title="Info">
          <IconButton onClick={handleOpenBank}>
            <InfoIcon style={{color: 'white'}} />
          </IconButton>
        </Tooltip>
      </div>
    </div>

    {results.fees.map((count, index) => (
      <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${count.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${count.code.toLowerCase()}.png`}
            alt=""
            className='mr-2'
        />
        {count?.country?.name}
      </span>
      <div className="flex items-center">
        <FeeModal
          open={open[index]}
          handleClose={() => handleClose(index)}
          name={count?.country?.name}
          code={count.code}
          res={count}
        />
        <div>{parseFloat(count.sum)} ₸</div>
        <Tooltip title="Info">
            <IconButton onClick={() => handleOpen(index)}>
            <InfoIcon style={{color: 'white'}} />
          </IconButton>
        </Tooltip>
      </div>
    </div> 
    ))}

    <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
      <span>{ t("result.modal.res") }</span>
      <div className="flex items-center">
        <div>{parseFloat(results.summa)} ₸</div>
      </div>
    </div>
    



  </>
}

export default Results;


