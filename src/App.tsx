import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MyAppBar from './components/MyAppBar'
import Content from './components/Content'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2)
    }
  })
)

const App: React.FC = () => {
  const classes = useStyles({})
  return (
    <>
      <MyAppBar title="Portfolio" />
      <Container maxWidth="lg" className={classes.container}>
        <Content />
      </Container>
    </>
  )
}

export default App
