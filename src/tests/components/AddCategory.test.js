import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme' 
import { AddCategory } from '../../components/AddCategory'

describe('AddCategory test', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe cambiar la caja de texto', () => {
    const value = 'Hola Mundo'
    wrapper.find("input").simulate("change", { target: { value } })

    expect(wrapper.find("input").prop('value')).toBe(value);
  })
  
  test('no debe postear on submit al tener menos de dos caracteres', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {}})

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('debe llamar setCategories y limpiear input', () => {
    const value = 'Hola Mundo'
    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
