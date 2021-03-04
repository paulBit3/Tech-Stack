/* customizing the material-ui theme, and then 
export it , so that it will be used in  App component */


import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'


// creating our theme function component
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#5c67a3',
      main: '#334ac0',
      dark: '#4764ca',
      contrastText: '#fff',
    },
    secondary: {
      light: '#93cefc',
      main: '#ff4e53',
      dark: '#c60055',
      contrastText: '#000',
    },
      openTitle: '#4775fa',
      protectedTitle: pink['400'],
      type: 'light'
    }
})

export default theme