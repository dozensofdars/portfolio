import React from 'react'
import Container from '@material-ui/core/Container'
import Content from './components/Content'
import Header from './components/Header'
import Copyright from './components/Copyright'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
)

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Container className={classes.container} maxWidth="md">
        <Content />
      </Container>
      <Copyright />
    </>
  )
}

export default App
