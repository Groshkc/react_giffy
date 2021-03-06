
import {API_KEY, API_URL} from './settings';

const fromApiResponseToGif = apiResponse => {
  const {data} =  apiResponse
  const { id, title, images } = data
  const { url } = images.downsized_medium
  return { id, title, url }
}

export default function getSingleGif ({id}) {
    const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`
    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGif)
}

