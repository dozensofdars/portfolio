import React from 'react'
import { Typography, Link } from '@material-ui/core'
import data from '../utils/data'

const copyright = data.copyright

const Copyright: React.FC = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href={copyright.link}>
      {copyright.name}
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export default Copyright
