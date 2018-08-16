import React from 'react'
import { CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const Content = ({ title, description, showDescription }) => (
  <CardContent>
    <Typography gutterBottom variant="headline" component="h3">{title}</Typography>
    {showDescription && description}
  </CardContent>
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showDescription: PropTypes.bool.isRequired,
}

export default Content
