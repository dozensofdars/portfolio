import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'
import { brown, amber, grey } from '@material-ui/core/colors'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: brown[700]
    },
    secondary: {
      main: amber.A400
    },
    error: {
      main: red.A400
    },
    background: {
      default: grey[100]
    }
  }
})

export default theme
