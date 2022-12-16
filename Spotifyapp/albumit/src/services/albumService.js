import axios from "axios"
const baseUrl = 'http://localhost:3003/'
const spotifyUrl = 'https://api.spotify.com/v1/albums/'

const postAlbum = async (albumId, token, date, rating) => {
const spotifyApiRequest = await axios(spotifyUrl + albumId, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  })
  const album = spotifyApiRequest.data
  const data = {...album, date: date, rating: rating}
  const response = await axios.post(baseUrl, data)
  return response.data
  }

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

  export { postAlbum, getAll }