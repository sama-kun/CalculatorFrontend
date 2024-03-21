import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Controller } from 'react-hook-form';

function CountrySelect({ control }) {
  const [countries, setCountries] = React.useState([]);
  const [selectedCountries, setSelectedCountries] = React.useState([]); // Define state for selected countries
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    fetch('/countries.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data["countries"])

        })
      .catch((error) => console.error("There has been a problem with your fetch operation:", error));
  }, []);

  return (
    <Controller
      name="countries"
      control={control}
      defaultValue={[]} // Set default value as an empty array
      render={({ field }) => (
        <Autocomplete
          multiple
          options={countries}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          filterOptions={(options, { inputValue }) =>
            options.filter(
              (option) =>
                option.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                option.code.toLowerCase().includes(inputValue.toLowerCase())
            )
          }
          onChange={(event, value) => {
            field.onChange(value); // Update form value
            setSelectedCountries(value); // Update local state
          }}
          value={selectedCountries} // Use selectedCountries state as value
          renderOption={(props, option, { selected }) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <Checkbox
                style={{ marginRight: 8 }}
                checked={selected}
              />
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              <ListItemText primary={`${option.name} (${option.code})`} />
            </Box>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={`${option.name} (${option.code})`}
                {...getTagProps({ index })}
                sx={{
                  color: 'white',
                  bgcolor: 'primary.main',
                  "& .MuiChip-deleteIcon": {
                    color: 'white',
                  }
                }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('form.country.field')}
              placeholder={t('form.country.search')}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& label': {
                  color: 'lightgray',
                },
                '& label.Mui-focused': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'grey',
                  },
                  '&:hover fieldset': {
                    borderColor: 'lightgray',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
            />
          )}
          style={{ width: '100%' }}
          sx={{
            "& .MuiAutocomplete-tag": {
              bgcolor: 'primary.main',
              color: 'white'
            },
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#374151",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              }
            }
          }}
        />
      )}
    />
  );
}

export default CountrySelect;
