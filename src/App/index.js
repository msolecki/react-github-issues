import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Issue from '../Issue'
import AppHeader from './Header'

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
  render () {
    const { classes } = this.props
    const issues = [
      {
        id: 0,
        title: 'test Title',
        desc: 'desc'
      },
      {
        id: 1,
        title: 'test Title 2',
        desc: 'desc'
      },
      {
        id: 2,
        title: 'test Title 3',
        desc: 'desc'
      }
    ]

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
