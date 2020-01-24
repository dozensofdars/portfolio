import React from 'react'
import header from '../images/header.jpg'
import { Box, Typography, useMediaQuery } from '@material-ui/core'
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundImage: `url(${header})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: { height: '150px' },
      [theme.breakpoints.only('sm')]: { height: '200px' },
      [theme.breakpoints.only('md')]: { height: '300px' },
      [theme.breakpoints.up('lg')]: { height: '400px' }
    },
    headerText: {
      color: 'white'
    },
    headerTextBlock: {
      textAlign: 'center'
    }
  })
)

const Header: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Box className={classes.header}>
      <Box className={classes.headerTextBlock}>
        <Typography
          className={classes.headerText}
          variant={mobile ? 'h3' : 'h1'}
        >
          すだ 's Page
        </Typography>
        <Typography
          className={classes.headerText}
          variant={mobile ? 'subtitle1' : 'h4'}
        >
          System Engineer
        </Typography>
      </Box>
    </Box>
  )
}
export default Header
