import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

class Issue extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDescription: false
    }
  }

  showDescription = () => {
    this.setState({
      showDescription: true
    })
  }

  hideDescription = () => {
    this.setState({
      showDescription: false
    })
  }

  handleShowDescriptionButtonClick = () => {
    if (this.state.showDescription) {
      this.hideDescription()
    }

    if (!this.state.showDescription) {
      this.showDescription()
    }
  }

  render () {
    const { title, state, description } = this.props
    const { showDescription } = this.state
    const issueDescription = <Typography>{description}</Typography>
    const issueTitle = `${ title } - ${ state }`

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3">{issueTitle}</Typography>
          {showDescription && issueDescription}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleShowDescriptionButtonClick}>
            {showDescription ? 'Hide description' : 'Show description'}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
}

export default Issue
