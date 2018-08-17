import React from 'react'
import Header from './index'
import { shallow } from 'enzyme'
import { Typography } from '@material-ui/core'

describe('App Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />).dive()

    expect(wrapper.find(Typography).length).toEqual(1)
  })
})
