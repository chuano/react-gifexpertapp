import { getGifs } from '../../helpers/getGifs'
import '@testing-library/jest-dom'

describe('getGif tests', () => {
  test('debe traer 10 elementos', async () => {
    const gifs = await getGifs('One punch')
    expect(gifs.length).toBe(10)
  })

  test('debe traer 0 elementos', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
})
