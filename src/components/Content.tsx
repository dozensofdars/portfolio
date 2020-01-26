import React from 'react'
import { Box } from '@material-ui/core'
import Profile from './Profile'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'
import ContentItem from './ContentItem'
import Skill from './Skill'

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
