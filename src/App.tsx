import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Content from './components/Content'
import Header from './components/Header'
import Copyright from './components/Copyright'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Axios from 'axios'
import { Data } from './utils/data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
)

const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null)
  useEffect(() => {
    Axios.get('./data.json').then(res => setData(res.data))
  }, [])
  const classes = useStyles()
  return !data ? (
    <></>
  ) : (
    <>
      <Header header={data.header} />
      <Container className={classes.container} maxWidth="md">
        <Content data={data} />
      </Container>
      <Copyright copyright={data.copyright} />
    </>
  )
}

export default App
