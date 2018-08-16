import React from 'react'
import { Button, CardActions } from '@material-ui/core'
import PropTypes from 'prop-types'

const Actions = ({ handleClick, showDescription }) => (
  <CardActions>
    <Button size="small" color="primary" onClick={handleClick}>
      {showDescription ? 'Hide description' : 'Show description'}
    </Button>
  </CardActions>
)

Actions.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showDescription: PropTypes.bool.isRequired,
}

export default Actions
