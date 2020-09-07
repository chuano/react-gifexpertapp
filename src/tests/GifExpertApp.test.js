import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GiftExpetApp'

describe('GifExpertApp', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })
  
  test('debe mostrar una lista de categorías', () => {
    const categories = ['One punch', 'Dragon ball']
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})

