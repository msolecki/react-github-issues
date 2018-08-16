import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
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
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}>
          {issues.map(issue => (
            <Grid item key={issue.id} sm={12}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h3">
                    {issue.title}
                  </Typography>
                  <Typography>
                    {issue.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
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
