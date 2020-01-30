import React from 'react'
import { Box } from '@material-ui/core'
import Profile from './Profile'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'
import ContentItem from './ContentItem'
import Skill from './Skill'
import Works from './Works'
import Contact from './Contact'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: { marginBottom: theme.spacing(4) }
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
        <Skill />
      </ContentItem>
      <ContentItem className={classes.item} title={data.works.title}>
        <Works />
      </ContentItem>
      <ContentItem className={classes.item} title={data.contact.title}>
        <Contact />
      </ContentItem>
    </Box>
  )
}

export default Content
