import { AppBar, Toolbar, Typography, Box, Container, ListItemText, MenuList, MenuItem } from '@mui/material'
import { BottomNav } from './BottomNav'
import { NavLink as RouterLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import AddIcon from '@mui/icons-material/Add'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { grey } from '@mui/material/colors'

const useStyles = makeStyles(() => ({
  link: {
    '&.active': {
      color: 'white',
    }
  },
}))

const pages = [{
  id: 1,
  icon: <ListAltIcon />,
  label: 'Каталог',
  url: '/'
},
{
  id: 2,
  icon: <AddIcon />,
  label: 'Создать',
  url: '/create'
}]

export const Layout = ({ children }) => {

  const classes = useStyles()

  return (
    <>
      <AppBar position="static" sx={{ zIndex: '1100' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: { xs: 0, md: '5vw' }, display: 'flex', textTransform: 'uppercase' }}
            >
              Store app
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
              <MenuList component="nav" sx={{ display: 'flex', p: 0 }}>
                {pages.map((page) => (
                  <li key={page.id}>
                    <MenuItem sx={{ px: '5vw', py: 2, color: grey[100] }} className={classes.link} component={RouterLink} to={page.url}>
                      <ListItemText>{page.label}</ListItemText>
                    </MenuItem>
                  </li>
                ))}
              </MenuList>
            </Box>
          </Toolbar>
        </Container>
        <BottomNav pages={pages} />
      </AppBar >
      <Container maxWidth='false' disableGutters component="main" sx={{
        pb: { xs: '56px', md: 0 }
      }}>
        {children}
      </Container>
    </>
  )
}