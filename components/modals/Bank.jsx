import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';


const BankModal = ({ open, handleClose, bank }) => {
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
        <Typography id="modal-title" variant="h5" component="h2">
          {t('result.bank')}
        </Typography>
         <Typography id="modal-description1" sx={{ mt: 2 }}>
          {t('result.modal.bank')}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {t('result.modal.res')} <strong>{ bank } ₸</strong>
        </Typography>
        <Button onClick={handleClose}>{t('closeBtn')}</Button>
      </Box>
    </Modal>
  </>
}

export default BankModal

