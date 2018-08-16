import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Issue from '../Issue'
import AppHeader from './Header'
import GithubClient from '../GithubClient'

const styles = theme => ({
  layout: {
    width: 'auto',
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

class App extends Component {
  constructor (props) {
    super(props)

    this.githubClient = new GithubClient('facebook', 'react')

    this.state = {
      issues: []
    }
  }

  async componentDidMount () {
    const issues = await this.githubClient.getIssues()

    this.setState({ issues })
  }

  render () {
    const { classes } = this.props
    const { issues } = this.state

    return (
      <div className={classes.layout}>
        <Grid container spacing={40}>
          <AppHeader />

          {issues && issues.map(issue => (
            <Grid item key={issue.id} sm={12}>
              <Issue {...issue} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
