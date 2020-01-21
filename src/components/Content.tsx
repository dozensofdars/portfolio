import React from 'react'
import { Box, Typography } from '@material-ui/core'
import ProTip from './ProTip'
import Copyright from './Copyright'

const Content: React.FC = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Create React App v4-beta example with TypeScript
    </Typography>
    <ProTip />
    <Copyright />
  </Box>
)

export default Content
