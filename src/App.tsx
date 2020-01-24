import React from 'react'
import Container from '@material-ui/core/Container'
import Content from './components/Content'
import Header from './components/Header'
import Copyright from './components/Copyright'

const App: React.FC = () => (
  <>
    <Header />
    <Container maxWidth="lg">
      <Content />
    </Container>
    <Copyright />
  </>
)

export default App
