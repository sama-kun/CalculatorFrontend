import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';


const OrdinaryModal = ({ open, handleClose, ordinary}) => {
  const { t } = useTranslation();

  const countries = ordinary.countries;
  
  return <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        {
          countries.map((value, index) => (
            <Typography id="modal-description" variant="h6" component="h2">
              <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${value.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${value.code.toLowerCase()}.png`}
                    alt=""
              />
              {value.name} - {Math.round(ordinary.oneFee).toLocaleString()} ₸
            </Typography>
          ))
        }
        
        
          <Typography id="modal-description" sx={{ mt: 2 }}>
          {t('result.modal.extraFee')}
          {ordinary.extraFee &&
            <p><strong>{ordinary.extraMark} x {Math.round(ordinary.oneFee).toLocaleString()} ₸ = { Math.round(ordinary.extraFee).toLocaleString() } ₸</strong></p>
          }
          </Typography>
        

        <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.res')} <strong>{Math.round(ordinary.fee + (ordinary.extraFee ? ordinary.extraFee : 0)).toLocaleString()} ₸</strong>
          </Typography>
          
        <Button onClick={handleClose}>{t('closeBtn')}</Button>
      </Box>
    </Modal>
  </>
}

export default OrdinaryModal

