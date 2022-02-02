import { Box, Button, IconButton, Typography, Container } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { ActionButton } from '../components/ActionButton'

export const Success = () => {

  return (

    <Container maxWidth='false' disableGutters sx={{
      width: '100%',
      height: { xs: 'calc(100vh - 56px - 56px)', sm: 'calc(100vh - 64px - 56px)', md: 'calc(100vh - 64px)' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(http://${process.env.REACT_APP_BACKEND_HOST}/static/icons/confetti.svg)`,
      backgroundSize: 'cover'
    }}>
      <Typography component='span' sx={{
        color: 'secondary.dark',
        textAlign: 'center',
        fontWeight: 'fontWeightLight',
        letterSpacing: '.2rem',
        fontSize: { xs: '1.6rem', sm: '2rem', md: '3rem' }
      }}>
        Товар успешно создан
      </Typography>
      <Box sx={{ mt: 5 }}>
        <ActionButton label='каталог' size='large' component={Link} to='/' endIcon={<ArrowForwardIosIcon />} />
      </Box>
    </Container >

  )
}
