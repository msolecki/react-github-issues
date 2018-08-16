import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core'
import Actions from './Actions'
import Content from './Content'
import Header from './Header'

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
    const { title, description, createdAt, user, state } = this.props
    const { showDescription } = this.state
    const issueDescription = <Typography>{description}</Typography>

    return (
      <Card>
        <Header userLogin={user.login} avatarUrl={user.avatar} issueCreatedDate={createdAt} state={state} />
        <Content title={title} description={issueDescription} showDescription={showDescription} />
        <Actions handleClick={this.handleShowDescriptionButtonClick} showDescription={showDescription} />
      </Card>
    )
  }
}

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default Issue
