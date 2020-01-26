import React from 'react'
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  SvgIconProps,
  Paper
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import ProfileRow from './ProfileRow'
import data from '../utils/data'
import { Person, Event, Work } from '@material-ui/icons'

const profile = data.profile

const icons: Record<string, (props: SvgIconProps) => JSX.Element> = {
  Person,
  Event,
  Work
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { textAlign: 'center' },
    paper: { padding: theme.spacing(2) },
    table: { marginBottom: theme.spacing(4) }
  })
)

const Profile: React.FC = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table className={classes.table}>
          <TableBody>
            {profile.items.map(item => (
              <ProfileRow
                key={item.title}
                title={item.title}
                body={item.body}
                avatarIcon={React.createElement(icons[item.avatarIcon])}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {profile.descriptions.map(desc => (
        <Typography key={desc} paragraph>
          {desc}
        </Typography>
      ))}
    </Paper>
  )
}

export default Profile
