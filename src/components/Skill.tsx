import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  ListItemIcon
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'

const skills = data.skills

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { textAlign: 'center' },
    listIcon: {
      maxWidth: theme.spacing(3),
      maxHeight: theme.spacing(3),
      fontSize: theme.spacing(3)
    },
    listItem: {},
    divider: { marginBottom: theme.spacing(1) }
  })
)

const Skill: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {skills.data.map(skill => (
        <Grid item xs={12} sm={6} key={skill.title}>
          <Card>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                {skill.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {skill.description}
              </Typography>
              {skill.data.map((item, i, array) => (
                <Box>
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <List dense>
                    {item.data.map(datum => (
                      <ListItem>
                        {datum.icon && (
                          <ListItemIcon>
                            <i
                              className={`${classes.listIcon} ${datum.icon}`}
                            />
                          </ListItemIcon>
                        )}
                        <ListItemText className={classes.listItem}>
                          {datum.text}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  {i !== array.length - 1 && (
                    <Divider className={classes.divider} />
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Skill
