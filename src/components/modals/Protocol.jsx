import * as React from 'react';
import { Modal, Box, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


function ProtocolModal({ open, handleClose }) {
  const { t } = useTranslation();
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="protocol-modal-title"
      aria-describedby="protocol-modal-description"
    >
      <Box sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '70%', md: '60%', lg: '50%', xl: '40%' }, // Адаптивная ширина
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        maxHeight: '90vh'
      }}>
        <Typography id="protocol-modal-title" variant="h6" component="h2" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
          Протокол Мадридской системы
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List dense>
          <ListItem>
            <ListItemText 
              primary="Статья 8(2)(i) Протокола"
              secondary="Регистрация знака в Международном бюро производится при условии предварительной уплаты международной пошлины, включающей основную пошлину."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Статья 8(2)(iii) Протокола"
              secondary="Добавочная пошлина за каждое заявление о расширении охраны."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Статья 8(7)(a) Протокола"
              secondary="Индивидуальная пошлина, размер которой указан в заявлении, может быть изменен, но не может превышать определенную сумму."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Статья 9sexies(1)(b) Протокола"
              secondary="Заявление, сделанное в соответствии со статьей 5(2)(b), не оказывает действия в отношениях с другими государствами-участниками."
            />
          </ListItem>
        </List>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={handleClose}>
            {t('closeBtn')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProtocolModal;
