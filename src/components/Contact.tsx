import React from 'react'
import { Grid, Link } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Contact as IContact } from '../utils/data'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import qiita from '../images/qiita.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { padding: theme.spacing(2) },
    imageContainer: { textAlign: 'center' },
    images: { height: '60px', width: 'auto' }
  })
)

type ContactProps = { contact: IContact }

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} sm className={classes.imageContainer}>
        <Link href={contact.twitter.link}>
          <img
            src={twitter}
            alt={`Twitter: ${contact.twitter.name}`}
            className={classes.images}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm className={classes.imageContainer}>
        <Link href={contact.github.link}>
          <img
            src={github}
            alt={`GitHub: ${contact.github.name}`}
            className={classes.images}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm className={classes.imageContainer}>
        <Link href={contact.qiita.link}>
          <img
            src={qiita}
            alt={`Qiita: ${contact.qiita.name}`}
            className={classes.images}
          />
        </Link>
      </Grid>
    </Grid>
  )
}

export default Contact
