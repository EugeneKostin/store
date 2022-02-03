import { TextField, Box, Button } from '@mui/material'
import { memo } from 'react'

export const InfoFilter = memo(({ handleChange, handleSubmit, filterItems }) => {

  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {filterItems.map((item) =>
          <TextField
            key={item.label}
            sx={{ mt: 2 }}
            inputProps={{ 'data-label': item.label }}
            fullWidth
            name={item.label}
            label={item.label}
            onChange={handleChange}
          />
        )}
        <Button sx={{ display: 'block', mt: 5, mx: 'auto' }} type="submit" variant="contained">Найти</Button>
      </form>
    </Box>
  )

})
