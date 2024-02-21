import * as React from 'react';
import MainForm from './calculator/Main';
import { useTranslation } from 'react-i18next';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Advertisement from './Advertisement';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

function CalculatorForm() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="text-white font-inter">
      <div className="mx-auto" style={{ width: '90%' }}>
        <div className="my-10 border-2 border-white rounded-lg p-4 md:flex">

          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <Advertisement />
          </div>
          
          <div className="md:w-1/2 w-full">
            <MainForm />
            <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2 my-4">
              <span>Basic tax</span>
              <Tooltip title="Info">
                <IconButton onClick={handleOpen}>
                  <InfoIcon style={{color: 'white'}} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>

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
              Modal Title
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This is the modal content. You can place any component or text here.
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default CalculatorForm;
