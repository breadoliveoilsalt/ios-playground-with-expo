import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Text } from 'react-native';
import HomeScreen from './HomeScreen'
Enzyme.configure({ adapter: new Adapter() });

describe("HomeScreen", () => {

  it("is truthy", () => {
    expect(true).toEqual(true)
  })

  it("documents attempt number 3", () => {
    const wrapper = mount(<HomeScreen/>)
    const container = wrapper.findWhere((node) => node.prop('testID') === 'attempts')
    expect(container.at(1).text()).toContain("ATTEMPT 3")
  })
})