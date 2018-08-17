import React from 'react'
import App from './index'
import { shallow } from 'enzyme'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('AppComponent', () => {
  const mockAdapter = new MockAdapter(axios)

  beforeAll(() => {
    mockAdapter.onGet('https://api.github.com/repos/facebook/react/issues?state=all&sort=updated').reply(200)
  })

  afterAll(() => {
    mockAdapter.reset()
  })

  it('renders without crashing', () => {
    const wrapper = shallow(<App />).dive()

    expect(wrapper.find(Grid).length).toEqual(1)
  })
})
