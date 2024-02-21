import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';


const BasicModal = ({ open, handleClose, basic }) => {
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
          {t('result.basic')}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {t('result.modal.basic')} { basic }₸
        </Typography>
          
        <Button onClick={handleClose}>{t('closeBtn')}</Button>
      </Box>
    </Modal>
  </>
}

export default BasicModal

