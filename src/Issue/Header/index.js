import React from 'react'
import { Avatar, CardHeader } from '@material-ui/core'
import PropTypes from 'prop-types'

const Header = ({ avatarUrl, userLogin, issueCreatedDate, state }) => (
  <CardHeader
    avatar={
      <Avatar aria-label="User" src={avatarUrl} />
    }
    title={userLogin}
    subheader={`created at ${issueCreatedDate}, actual state is:  ${state}`}
  />
)

Header.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  userLogin: PropTypes.string.isRequired,
  issueCreatedDate: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
}

export default Header
