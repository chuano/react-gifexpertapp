import '@testing-library/jest-dom'
import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('GifGrid tests', () => {
  const category = 'One punch'

  test('debe mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe mostrar items cuando se cargan imágenes', () => {
    const gifs = [
      {
        id: 'aaa',
        url: 'http://localhost/algo.jpg',
        title: 'title',
      },
      {
        id: 'aaa',
        url: 'http://localhost/algo.jpg',
        title: 'title',
      },
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
