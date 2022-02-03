import { Backdrop as BackdropMaterial, CircularProgress } from '@mui/material'

export const Backdrop = () => {

  return (
    <BackdropMaterial
      sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress disableShrink color="inherit" />
    </BackdropMaterial>
  )
}
