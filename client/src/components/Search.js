import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ handleChange }) => {

  return (
    <TextField fullWidth
      sx={{ p: 0, mt: 2 }}
      hiddenLabel
      onChange={handleChange}
      placeholder="Поиск…"
      autoComplete='off'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="filled"
    />
  )

}
