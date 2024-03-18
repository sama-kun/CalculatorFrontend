import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ProtocolModal from '../modals/Protocol'
import Synonymizer from '../screens/Synonymizer';

const Advertisement = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Synonymizer />
  );
};

export default Advertisement;
