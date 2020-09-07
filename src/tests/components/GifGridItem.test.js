import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe("GifGridItem test", () => {

  const title = 'Un título'
  const url = 'http://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={ title } url={ url }/>)

  test("debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('debe tener un párrafo con el title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })
  
  test('debe tener src y alt', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('debe tener animated__fadeIn', () => {
    const div = wrapper.find("div");
    const className = div.prop('className')
    expect(className.includes("animate__fadeIn")).toBe(true);
  })
});
