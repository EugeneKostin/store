import { useState } from 'react'
import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'

export const BottomNav = ({ pages }) => {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{
      display: { xs: 'block', md: 'none' },
      width: '100%',
      position: 'fixed',
      zIndex: 'inherit',
      bottom: 0,
      left: 0,
      right: 0
    }} elevation={3}>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {pages.map((page) => (
            <BottomNavigationAction key={page.id} component={RouterLink} to={page.url} label={page.label} icon={page.icon} />
          ))}
        </BottomNavigation>
      </Box>
    </Paper>
  )

}