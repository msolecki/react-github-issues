import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

const Issue = ({ title, desc }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h3">
        {title}
      </Typography>
      <Typography>
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        View
      </Button>
    </CardActions>
  </Card>
)

export default Issue
