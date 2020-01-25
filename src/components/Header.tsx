import React from 'react'
import headerImage from '../images/header.jpg'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'

const header = data.header

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundImage: `url(${headerImage})`,
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
  return (
    <Box className={classes.header}>
      <Box className={classes.headerTextBlock}>
        <Typography className={classes.headerText} variant="h1">
          {header.title}
        </Typography>
        <Typography className={classes.headerText} variant="h4">
          {header.subtitle}
        </Typography>
      </Box>
    </Box>
  )
}
export default Header
