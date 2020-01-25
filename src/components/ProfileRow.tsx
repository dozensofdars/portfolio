import React from 'react'
import { TableRow, TableCell, Box, Avatar, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { FiberManualRecord as DotIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleCell: { display: 'flex', alignItems: 'center' },
    avatar: {
      marginRight: theme.spacing(2),
      width: theme.spacing(4),
      height: theme.spacing(4)
    }
  })
)

type ProfileRowProps = {
  avatarIcon?: JSX.Element
  title: string
  body: string
}

const ProfileRow: React.FC<ProfileRowProps> = props => {
  const classes = useStyles()
  return (
    <TableRow>
      <TableCell>
        <Box className={classes.titleCell}>
          <Avatar className={classes.avatar}>
            {props.avatarIcon || <DotIcon />}
          </Avatar>
          <Typography variant="body1">{props.title}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{props.body}</Typography>
      </TableCell>
    </TableRow>
  )
}

export default ProfileRow
