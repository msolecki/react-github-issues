import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Issue from '../Issue'
import AppHeader from './Header'
import axios from 'axios'

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

    this.state = {
      issues: []
    }
  }

  getIssues = async () => {
    const response = await axios.get('https://api.github.com/repos/facebook/react/issues?state=all&sort=updated')

    return response.data.map(issue => {
      return {
        id: issue.id,
        title: issue.title,
        state: issue.state,
        createdAt: issue.created_at,
        description: issue.body,
        user: {
          login: issue.user.login,
          url: issue.user.url,
          avatar: issue.user.avatar_url
        }
      }
    })
  }

  async componentDidMount () {
    const issues = await this.getIssues()

    this.setState({ issues: issues })
  }

  render () {
    const { classes } = this.props
    const { issues } = this.state

    return (
      <div className={classes.layout}>
        <Grid container spacing={40}>
          <AppHeader />

          {issues.map(issue => (
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
