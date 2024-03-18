import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';


const FeeModal = ({ open, handleClose, name , code , res}) => {
  const { t } = useTranslation();
  
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
        <Typography id="modal-title" variant="h6" component="h2">
          <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                alt=""
          />
          {name}
        </Typography>
        {}
        {res.firstFee &&
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.firstFee')} <strong>{Math.round(res.firstFee).toLocaleString()} ₸</strong>
          </Typography>
        }

        {res.thirdFee &&
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.thirdFee')} <strong>{Math.round(res.thirdFee).toLocaleString()} ₸</strong>
          </Typography>
        }
        
        {res.extraFee &&
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.extraFee')}
            <p><strong>{res.extraMark} x {Math.round(res.extraOneFee).toLocaleString()} = { Math.round(res.extraFee).toLocaleString() }</strong></p>
          </Typography>
        }

        {res.ordinaryFee &&
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.ordinary')} <strong>{Math.round(res.ordinaryFee).toLocaleString()} ₸</strong>
          </Typography>
        }

        <Typography id="modal-description" sx={{ mt: 2 }}>
            {t('result.modal.res')} <strong>{Math.round(res.sum).toLocaleString()} ₸</strong>
          </Typography>
          
        <Button onClick={handleClose}>{t('closeBtn')}</Button>
      </Box>
    </Modal>
  </>
}

export default FeeModal

