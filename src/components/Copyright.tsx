import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { Copyright as ICopyright } from '../utils/data'

type CopyrightProps = { copyright: ICopyright }

const Copyright: React.FC<CopyrightProps> = ({ copyright }) => (
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
