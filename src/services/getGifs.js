
import {API_KEY, API_URL} from './settings';

const fromApiResponseToGifs = apiResponse => {
  const {data = []} =  apiResponse
  if(Array.isArray(data)){
    const gifs = data.map(image => {
      const { id, title, images } = image
      const { url } = images.downsized_medium
      return { id, title, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 25, keyword = 'morty', page = 0} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=${page * limit}&rating=g&lang=en`
    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

