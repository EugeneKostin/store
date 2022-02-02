import { Box, Button, IconButton, Typography, Container } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

export const ActionButton = ({ label, variant, size, ...otherProps }) => {
  return (

    <Button variant={variant || "contained"} size={size || "medium"} {...otherProps} sx={{
      fontSize: { xs: '1rem', md: '1.4rem' },
      fontWeight: 'fontWeightLight',
      letterSpacing: '.1rem',
      // px: { xs: 2, md: 4 },
      // py: { xs: 1, md: 2 },
    }}>
      {label}
    </Button>

  )
}