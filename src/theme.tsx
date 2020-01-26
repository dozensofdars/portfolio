import red from '@material-ui/core/colors/red'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { amber, grey, orange } from '@material-ui/core/colors'

// A custom theme for this app
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: orange[500]
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
)

export default theme
