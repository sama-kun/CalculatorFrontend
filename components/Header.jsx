import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState('RU');

  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
    handleClose();
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#1F2937' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          LOGO
        </IconButton>

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Название компании
        </Typography>

        <Button color="inherit">Главная</Button>
        <Button color="inherit">Продукты</Button>

        <IconButton color="inherit" aria-label="change language" onClick={handleMenu}>
          <LanguageIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleLanguageChange('EN')}>EN</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('RU')}>RU</MenuItem>
          
        </Menu>
        <img
            loading="lazy"
            width="40"
            height="100%"
            srcSet={`https://flagcdn.com/w40/${language.toLowerCase() === 'en'?'us':'ru'}.png 2x`}
            src={`https://flagcdn.com/w20/${language.toLowerCase() === 'en'?'us':'ru'}.png`}
            alt=""
          />

      </Toolbar>
    </AppBar>
  );
}

export default Header;
