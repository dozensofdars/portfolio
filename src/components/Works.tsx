import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  CardActions,
  Button
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import data from '../utils/data'
import danshikoh from '../images/danshikoh.png'
import portfolio from '../images/portfolio.png'
import vocaminer from '../images/vocaminer.png'

const images: Record<string, string> = {
  danshikoh,
  portfolio,
  vocaminer
}

const works = data.works

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { textAlign: 'center' },
    paper: { padding: theme.spacing(2) },
    table: { marginBottom: theme.spacing(4) },
    image: { width: '100%', height: 'auto' }
  })
)

const Works: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {works.items.map(work => (
        <Grid item xs={12} sm={6} key={work.title}>
          <Card>
            <CardMedia
              component="img"
              alt={work.title}
              title={work.title}
              image={images[work.image]}
              className={classes.image}
            />
            <Divider />
            <CardContent>
              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                {work.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {work.description}
              </Typography>
            </CardContent>
            {work.link && (
              <CardActions>
                <Button color="primary" href={work.link}>
                  見に行く
                </Button>
              </CardActions>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Works
