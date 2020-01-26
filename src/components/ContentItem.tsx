import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { textAlign: 'center' }
  })
)

type ContentItemProps = {
  title: string
  className?: string
}

const ContentItem: React.FC<ContentItemProps> = props => {
  const classes = useStyles()
  const { className } = props
  return (
    <Box className={className}>
      <Typography className={classes.title} variant="h3" color="textSecondary">
        {props.title}
      </Typography>
      {props.children}
    </Box>
  )
}

export default ContentItem
