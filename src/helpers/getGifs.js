export const getGifs = async (category) => {
  const apiKey = 'SSAiCGTiMvEk5w0u73YjsvjGeh16R7hY'
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
  const response = await fetch(url)
  const { data } = await response.json()
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}