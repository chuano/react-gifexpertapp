import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('useFetchGifs test', () => {
  test('debe retornar el estado incial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'))
    const { data, loading } = result.current
    await waitForNextUpdate()

    expect(data.length).toBe(0)
    expect(loading).toBe(true)
  }) 

  test('debe retornar un array de imgs y loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'))
    await waitForNextUpdate()
    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
