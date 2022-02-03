import { FormGroup, Grid, Box, IconButton, SwipeableDrawer, Fab } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList'

export const FilterLayout = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = (e) => {
    if (
      e &&
      e.type === 'keydown' &&
      (e.key === 'Tab' || e.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen)
  };

  return (
    <>
      <Grid component='aside' item xs={2} sx={{
        display: { xs: 'none', md: 'flex' }
      }}>
        <FormGroup sx={{
          mt: 3,
          bgcolor: grey[100],
          p: 1,
          pb: 3,
        }}>
          {children}
        </FormGroup>
      </Grid>
      <Box sx={{
        display: { xs: 'block', md: 'none' }
      }}>
        <Fab onClick={toggleDrawer} color="primary" aria-label="add" sx={{
          position: 'fixed',
          bottom: 66,
          right: 16,
        }}>
          <FilterListIcon sx={{ color: 'white' }} />
        </Fab>

        <SwipeableDrawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <Box sx={{ width: '80vw', p: 2, pt: 5 }}>
            {children}
          </Box>
        </SwipeableDrawer>
      </Box>
    </>
  )
}
