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
import { Skills } from '../utils/data'

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

type SkillProps = { skills: Skills }

const Skill: React.FC<SkillProps> = ({ skills }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {skills.items.map(skill => (
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
              {skill.items.map((item, i, array) => (
                <Box key={item.title}>
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <List dense>
                    {item.items.map(datum => (
                      <ListItem key={datum.text}>
                        {datum.icon && (
                          <ListItemIcon>
                            {datum.icon.endsWith('.svg') ? (
                              <object
                                type="image/svg+xml"
                                data={`${process.env.PUBLIC_URL}/others/${datum.icon}`}
                                className={classes.listIcon}
                                aria-label={datum.icon}
                              />
                            ) : (
                              <i
                                className={`${classes.listIcon} ${datum.icon}`}
                              />
                            )}
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
