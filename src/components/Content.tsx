import React from 'react'
import { Box } from '@material-ui/core'
import Profile from './Profile'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import ContentItem from './ContentItem'
import Skill from './Skill'
import Works from './Works'
import Contact from './Contact'
import { Data } from '../utils/data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: { marginBottom: theme.spacing(4) }
  })
)

type ContentProps = { data: Data }

const Content: React.FC<ContentProps> = ({ data }) => {
  const classes = useStyles()
  return (
    <Box>
      <ContentItem className={classes.item} title={data.profile.title}>
        <Profile profile={data.profile} />
      </ContentItem>
      <ContentItem className={classes.item} title={data.skills.title}>
        <Skill skills={data.skills} />
      </ContentItem>
      <ContentItem className={classes.item} title={data.works.title}>
        <Works works={data.works} />
      </ContentItem>
      <ContentItem className={classes.item} title={data.contact.title}>
        <Contact contact={data.contact} />
      </ContentItem>
    </Box>
  )
}

export default Content
