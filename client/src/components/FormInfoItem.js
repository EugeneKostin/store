import { Box, TextField, MenuItem, IconButton } from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { grey } from '@mui/material/colors';

export const FormInfoItem = ({ handleChange, handleDeleteField }) => {

  return (
    <Box sx={{
      mt: 2,
      px: 1,
      py: 2,
      bgcolor: grey[100],
      borderRadius: '5px'
    }} >
      <TextField sx={{ minWidth: '160px' }}
        variant="standard"
        label="Название"
        name="label"
        fullWidth
        onChange={handleChange}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2,
      }} >
        <TextField sx={{ mr: 1 }}
          label='Значение'
          name="value"
          onChange={handleChange}
          fullWidth
        />
        <IconButton
          title="Удалить"
          onClick={handleDeleteField}
          color="primary"
          size="large"
        >
          <RemoveCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
};
