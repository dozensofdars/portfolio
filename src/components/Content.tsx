import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Profile from './Profile'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'
import ContentItem from './ContentItem'

const border = '1px solid rgba(224, 224, 224, 1)'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: { marginBottom: theme.spacing(4) },
    gridLeft: {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        borderRight: border
      },
      borderBottom: border
    },
    gridRight: {
      padding: theme.spacing(1),
      borderBottom: border
    },
    gridLeftLast: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        borderBottom: border
      },
      [theme.breakpoints.up('sm')]: {
        borderRight: border
      }
    },
    gridRightLast: {
      padding: theme.spacing(1)
    }
  })
)

const Content: React.FC = () => {
  const classes = useStyles()
  return (
    <Box>
      <ContentItem className={classes.item} title={data.profile.title}>
        <Profile />
      </ContentItem>
      <ContentItem className={classes.item} title={data.skills.title}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.gridLeft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridRight}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridLeft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridRight}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridLeftLast}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridRightLast}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
        </Grid>
      </ContentItem>
      <ContentItem
        className={classes.item}
        title={data.works.title}
      ></ContentItem>
      <ContentItem
        className={classes.item}
        title={data.contact.title}
      ></ContentItem>
    </Box>
  )
}

export default Content
