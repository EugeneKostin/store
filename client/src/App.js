import { AppRouter } from "./components/AppRouter"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Layout } from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        endIcon: {
          "& > *:nth-of-type(1)": {
            fontSize: 'inherit',
          }
        }
      }
    }
  }
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
