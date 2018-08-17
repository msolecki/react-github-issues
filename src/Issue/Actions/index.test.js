import React from 'react'
import Action from './index'
import { shallow } from 'enzyme'
import { Button } from '@material-ui/core'

describe('Issue Action Section', () => {
  const onClick = jest.fn()

  it('renders without crashing', () => {
    const wrapper = shallow(<Action handleClick={onClick} showDescription={true} />).dive().dive().childAt(0).dive().dive().childAt(0)

    expect(wrapper.text()).toEqual('Hide description')
  })

  it('test click', () => {
    const wrapper = shallow(<Action handleClick={onClick} showDescription={true} />).dive()

    wrapper.find(Button).simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
